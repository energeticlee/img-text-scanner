import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import Tesseract from "tesseract.js";
import { checkForSensitiveInfo } from "../Function/helper";
import { IimgArr, IHomeProps } from "../Function/Interface";
import style from "../css/Home.module.css";

const Home: FC<IHomeProps> = ({ setImgTextArr }) => {
  const history = useHistory();
  const [progress, setProgress] = useState<string>(`0%`);

  const handleScan = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let imgArr: IimgArr[] = [];
    const files = event.currentTarget.imgFiles.files;
    for (let index = 0; index < files.length; index++) {
      setProgress((x) => (x = `${(index / files.length) * 100}%`));
      await Tesseract.recognize(files[index], "eng").then(
        ({ data: { text } }) => {
          //* Include email, phone starting with (+ country code), $ followed by number, contain more than 10 words that are at least 5 char long
          if (checkForSensitiveInfo(text)) {
            imgArr.push({
              index,
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

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleScan(e)}>
          <label>Upload files (Support multiple input)</label>
          <input type="file" name="imgFiles" multiple />
          <div>
            <button type="submit">Scan</button>
          </div>
        </form>
      </div>
      <div className={style.progressBar}>
        <div className={style.progressLevel} style={{ width: progress }} />
      </div>
    </div>
  );
};

export default Home;
