import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import style from "../../css/Result.module.css";

interface Props {
  fileName: string;
  image: string;
  fileIndex: string;
}

const ActionAreaCard: FC<Props> = ({ fileName, image, fileIndex }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={fileName} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p className={style.text}>{`${fileIndex}) ${fileName}`}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ActionAreaCard;
