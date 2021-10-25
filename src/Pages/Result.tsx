import { useHistory } from "react-router-dom";
import { IimgArr } from "../Function/Interface";
import ActionAreaCard from "./Components/ActionAreaCard";
import style from "../css/Result.module.css";
import Button from "@mui/material/Button";

const Result = ({ imgTextArr }: { imgTextArr: IimgArr[] | [] }) => {
  const history = useHistory();
  return (
    <div className={style.mainContainer}>
      <div className={style.headerContainer}>
        <h1 className={style.header}>Result</h1>
        <Button variant="outlined" onClick={() => history.push("/")}>
          Back To Home
        </Button>
      </div>
      {imgTextArr.map((cardData) => (
        <div className={style.cardWrapper}>
          <ActionAreaCard
            fileName={cardData.fileName}
            fileIndex={cardData.index}
            image={cardData.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Result;
