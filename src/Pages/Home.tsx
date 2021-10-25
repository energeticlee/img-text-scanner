import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import Tesseract from "tesseract.js";
import { checkForSensitiveInfo } from "../Function/helper";
import { IimgArr, IHomeProps } from "../Function/Interface";
import style from "../css/Home.module.css";
import ScanButton from "./Components/ScanButton";
import UploadButton from "./Components/UploadButton";
import { DocumentScanner } from "@mui/icons-material";
import { CircularProgressWithLabel } from "./Components/CircularProgressWithLabel";

const Home: FC<IHomeProps> = ({ setImgTextArr }) => {
  const history = useHistory();
  const [progress, setProgress] = useState<number>(0);
  const [inputArray, setInputArray] = useState<string[] | undefined>();
  const [scanOngoing, setScanOngoing] = useState<boolean>(false);

  const handleScan = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setScanOngoing(true);

    let imgArr: IimgArr[] = [];
    const files = event.currentTarget.imgFiles.files;
    for (let index = 0; index < files.length; index++) {
      setProgress((x) => (x = (index / files.length) * 100));
      await Tesseract.recognize(files[index], "eng").then(
        ({ data: { text } }) => {
          //* Include email, phone starting with (+ country code), $ followed by number, contain more than 10 words that are at least 5 char long
          if (checkForSensitiveInfo(text)) {
            imgArr.push({
              index: (index + 1).toString(),
              text,
              fileName: files[index].name,
              image: URL.createObjectURL(files[index]),
            });
          }
        }
      );
    }
    setImgTextArr(imgArr);
    history.push("/result");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)
      setInputArray(Array.from(e.target.files, (file) => file.name));
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.header}>
        <DocumentScanner style={{ transform: "scale(5)", fill: "white" }} />
      </div>
      <div className={style.formContainer}>
        <form onSubmit={(e) => handleScan(e)} className={style.forms}>
          <label className={style.label}>
            <h1 className={style.labelText}>Upload files</h1>
            <h2 className={style.labelDescription}>(Support multiple input)</h2>
          </label>
          <UploadButton
            handleInputChange={handleInputChange}
            disable={scanOngoing}
          />
          <ScanButton disable={scanOngoing} />
        </form>
        {scanOngoing && (
          <>
            <div className={style.progressBarContainer}>
              <p className={style.progressBarText}>
                {scanOngoing && "Scanning..."}
              </p>
            </div>
            <CircularProgressWithLabel value={progress} />
          </>
        )}
      </div>
      {scanOngoing ? null : (
        <div className={style.displayInput}>
          {inputArray &&
            inputArray.map((item) => {
              return <li className={style.itemList}>{item}</li>;
            })}
        </div>
      )}
    </div>
  );
};

export default Home;
