import React from "react";
import { IimgArr } from "../../Function/Interface";

const Cards = ({ cardInfo }: { cardInfo: IimgArr }) => {
  return (
    <div>
      <img src={cardInfo.image} alt="" height={100} width="auto" />
      <p>file index: {cardInfo.index}</p>
      <p>file name: {cardInfo.fileName}</p>
    </div>
  );
};

export default Cards;
