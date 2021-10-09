export interface IimgArr {
  index: number | string;
  text: string;
  fileName: string;
  image: string;
}

export interface IHomeProps {
  setImgTextArr: React.Dispatch<React.SetStateAction<[] | IimgArr[]>>;
}
