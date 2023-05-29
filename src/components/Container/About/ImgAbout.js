import Img from "../../../lib/components/base/Img";
import PhotoSrc from "./img_perso.png";

export default function ImgAbout() {
  return (
    <div className="img_about">
      <Img src={PhotoSrc} alt="Photos Personnel" />
    </div>
  )
}