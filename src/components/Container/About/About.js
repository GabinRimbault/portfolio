import {Link} from "react-router-dom";
import Title from "../../../lib/components/base/Title";
import TextAbout from "./TextAbout";
import SkillsList from "./SkillsList";
import ImgAbout from "./ImgAbout";
import Button from "../../../lib/components/base/Button";

export default function About() {
  return (
    <div className="about">
      <div className="menu_mobile">
        <Link to={"/"}><i className="fa-solid fa-arrow-left"></i> /</Link>
        <Link to={"/experiences"}>/experiences <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <Title classTitle="heading" lvl="h2">A propos</Title>
      <div className="wrapper_about">
        <div className="about_content">
          <TextAbout />
          <SkillsList />
        </div>
        <div className="wrapper_img_about">
          <ImgAbout />
        </div>
      </div>
      <Button href="/experiences" classBtn="btn mt-4">
        Continuer la visite <i className="fa-solid fa-arrow-down"></i>
      </Button>
    </div>
  )
}
