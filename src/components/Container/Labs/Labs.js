import {Link} from "react-router-dom";
import Title from "../../../lib/components/base/Title";
import Cards from "../../../lib/components/bloc/Cards/Cards";
import Content from "../../../lib/components/base/Content";
import List from "../../../lib/components/base/List";
import Button from "../../../lib/components/base/Button";
import TextLabs from "./TextLabs";
import {useState} from "react";

export default function Labs() {

  const [infos, setInfos] = useState({
    booki: {
      tags: ["HTML", "CSS"],
      links: {
        download: {
          liens: ["https://github.com/GabinRimbault/Booki.git", <i className="fas fa-share-square fa-rotate-270"></i>]
        },
        share: {
          liens: ["https://github.com/GabinRimbault/Booki", <i className="fa-brands fa-github"></i>]
        }
      }
    },
    portfolio: {
      tags: ["Javascript", "React"],
      links: {
        download: {
          liens: ["https://github.com/GabinRimbault/portfolio.git", <i className="fas fa-share-square fa-rotate-270"></i>]
        },
        share: {
          liens: ["https://github.com/GabinRimbault/portfolio", <i className="fa-brands fa-github"></i>]
        }
      }
    },
    velolyon: {
      tags: ["Javascript Vanilla", "HTML", "CSS"],
      links: {
        download: {
          liens: ["https://github.com/GabinRimbault/VeloLyonJS.git", <i className="fas fa-share-square fa-rotate-270"></i>]
        },
        share: {
          liens: ["https://github.com/GabinRimbault/VeloLyonJS", <i className="fa-brands fa-github"></i>]
        }
      }
    }
  });


  return (
    <div className="labs">
      <div className="menu_mobile">
        <Link to={"/experiences"}><i className="fa-solid fa-arrow-left"></i> /experiences</Link>
        <Link to={"/contact"}>/contact <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <Title classTitle="heading" lvl="h2">Labs</Title>
      <TextLabs />
      <div className="labs_cards">
        <Cards>
          <Content classContent="p-overline">Projet à la une :</Content>
          <Title lvl="h3">Booki</Title>
          <Content classContent="p-labs">
            Transformez une maquette en site web avec HTML & CSS.<br />
            Intégrer du contenu conformément à une maquette.<br />
            Implémenter une interface responsive
          </Content>
          <div className="cards_options">
            <List type="ul" data={infos.booki.tags} classList="cards_tags" />
            <List type="ul" data={infos.booki.links} classList="cards_links" />
          </div>
        </Cards>
        <Cards>
          <Title lvl="h3">Portfolio v1</Title>
          <Content classContent="p-labs">
            Mon projet de portfolio est une vitrine en ligne qui présente mes compétences, réalisations et projets en tant que développeur web.<br />
            Il offre aux visiteurs une expérience utilisateur conviviale et met en valeur mon expertise dans la création de sites web modernes et réactifs.
          </Content>
          <div className="cards_options">
            <List type="ul" data={infos.portfolio.tags} classList="cards_tags" />
            <List type="ul" data={infos.portfolio.links} classList="cards_links" />
          </div>
        </Cards>
        <Cards>
          <Title lvl="h3">VeloLyon JS</Title>
          <Content classContent="p-labs">
            Concevoir une carte interactive de location de vélos.<br />
            Réalisé en Javascript une Single page Application simulant la réservation de vélos dans une ville.<br />
            Utilisation de la POO en Javascript.
          </Content>
          <div className="cards_options">
            <List type="ul" data={infos.velolyon.tags} classList="cards_tags" />
            <List type="ul" data={infos.velolyon.links} classList="cards_links" />
          </div>
        </Cards>
      </div>
      <Content classContent="p-description mt-4">Pour voir d'autre projet retrouvez moi sur <a href="https://github.com/GabinRimbault">Github</a></Content>
      <Button href="/contact" classBtn="btn mt-4">
        Et si on discutait ? <i className="fa-sharp fa-solid fa-mug-saucer"></i>
      </Button>
    </div>
  )
}