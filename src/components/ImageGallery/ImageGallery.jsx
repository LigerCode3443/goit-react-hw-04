import { ImgCard } from "../ImgCard/ImgCard";
import s from "./ImageGallery.module.css";

export const ImageGallery = ({ photos }) => {
  return (
    <ul className={s.list}>
      {photos.map((photo) => (
        <li key={photo.id} className={s.item}>
          <ImgCard {...photo} />
        </li>
      ))}
    </ul>
  );
};
