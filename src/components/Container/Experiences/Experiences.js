import {Link} from "react-router-dom";
import Title from "../../../lib/components/base/Title";
import TextExperiences from "./TextExperiences";
import Button from "../../../lib/components/base/Button";
import {useEffect} from "react";
import {scrollToAnchor} from "../../../lib/js/scroll";

export default function Experiences() {

  useEffect(() => {
    scrollToAnchor();
  }, []);

  return (
    <div className="experiences">
      <div className="menu_mobile">
        <Link to={"/about#root"}><i className="fa-solid fa-arrow-left"></i> /about</Link>
        <Link to={"/labs#root"}>/labs <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <Title classTitle="heading" lvl="h2">Experiences</Title>
      <div className="wrapper_experiences row">
        <TextExperiences />
      </div>
      <Button href="/labs#root" classBtn="btn mt-4">
        On regarde mes projets ?
      </Button>
    </div>
  )
}