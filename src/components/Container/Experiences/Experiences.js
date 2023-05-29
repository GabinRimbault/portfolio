import {Link} from "react-router-dom";
import Title from "../../../lib/components/base/Title";
import TextExperiences from "./TextExperiences";
import Button from "../../../lib/components/base/Button";

export default function Experiences() {
  return (
    <div className="experiences">
      <div className="menu_mobile">
        <Link to={"/about"}><i className="fa-solid fa-arrow-left"></i> /about</Link>
        <Link to={"/labs"}>/labs <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <Title classTitle="heading" lvl="h2">Experiences</Title>
      <div className="wrapper_experiences row">
        <TextExperiences />
      </div>
      <Button href="/labs" classBtn="btn mt-4">
        On regarde mes projets ?
      </Button>
    </div>
  )
}