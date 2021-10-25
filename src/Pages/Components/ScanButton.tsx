import { FC } from "react";
import { Button } from "@mui/material";
import { DocumentScanner } from "@mui/icons-material";
import style from "../../css/Home.module.css";

interface Prop {
  disable: boolean;
}

const ScanButton: FC<Prop> = ({ disable }) => {
  return (
    <div className={style.button}>
      <Button
        variant="contained"
        type="submit"
        disabled={disable}
        startIcon={<DocumentScanner />}
      >
        Scan
      </Button>
    </div>
  );
};

export default ScanButton;
