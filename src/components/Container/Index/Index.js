import {Link} from "react-router-dom";
import Title from "../../../lib/components/base/Title";
import Button from "../../../lib/components/base/Button";
import Content from "../../../lib/components/base/Content";

export default function Index() {
  return (
    <div className="index">
      <div className="menu_mobile">
        <Link to={"/contact#root"}><i className="fa-solid fa-arrow-left"></i> ?</Link>
        <Link to={"/about#root"}>/apropos <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <Title lvl="h1" >Hey! Je m'appelle,</Title>
      <Title lvl="h2">Gabin RIMBAULT</Title>
      <Title lvl="h3">Je suis passionné par le Web !</Title>
      <Content classContent="presentation">En tant que Développeur Web, je me spécialise dans la création et parfois la conception d'expériences web exceptionnelles.
        Mon objectif est de créer des produits accessibles et axés sur l'humain.
      </Content>
      <hr/>
      <Content classContent="presentation">
        Je suis constamment inspiré par les défis techniques et l'opportunité de repousser les limites pour offrir des solutions innovantes.
        Je suis impatient de collaborer avec vous pour réaliser des projets Web passionnants et marquants !
      </Content>
      <Button href="/about#root" classBtn="btn mt-4">Pour mieux me connaitre <i className="fa-solid fa-arrow-down"></i></Button>
    </div>
  )
}