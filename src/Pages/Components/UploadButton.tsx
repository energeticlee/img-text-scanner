import { FC } from "react";
import { Button } from "@mui/material";
import { Upload } from "@mui/icons-material";
import style from "../../css/Home.module.css";

interface Prop {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disable: boolean;
}

const InputButton: FC<Prop> = ({ handleInputChange, disable }) => {
  return (
    <div className={style.button}>
      <Button
        variant="text"
        component="label"
        startIcon={<Upload />}
        className={style.button}
        disabled={disable}
      >
        Upload File
        <input
          type="file"
          name="imgFiles"
          hidden
          multiple
          onChange={(e) => handleInputChange(e)}
        />
      </Button>
    </div>
  );
};

export default InputButton;
