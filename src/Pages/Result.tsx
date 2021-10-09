import React from "react";
import { IimgArr } from "../Function/Interface";
import Cards from "./Components/Cards";

const Result = ({ imgTextArr }: { imgTextArr: IimgArr[] | [] }) => {
  return (
    <div>
      <h1>TESTING</h1>
      {imgTextArr.map((cardData) => (
        <Cards key={cardData.index} cardInfo={cardData} />
      ))}
    </div>
  );
};

export default Result;
