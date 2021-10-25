export interface IimgArr {
  index: string;
  text: string;
  fileName: string;
  image: string;
}

export interface IHomeProps {
  setImgTextArr: React.Dispatch<React.SetStateAction<[] | IimgArr[]>>;
}
