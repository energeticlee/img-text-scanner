import React from "react";
import style from "../../css/Footer.module.css";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className={style.mainContainer}>
      <p className={style.createdBy}>
        Created By{" "}
        <Button variant="outlined">
          <a href="https://www.linkedin.com/in/justinlee-yl/">Justin</a>
        </Button>
      </p>
    </div>
  );
};

export default Footer;
