import {Link} from "react-router-dom";
import Title from "../../../lib/components/base/Title";
import Content from "../../../lib/components/base/Content";
import Button from "../../../lib/components/base/Button";

export default function NotFound() {
  return (
    <div className="not_found">
      <div className="menu_mobile">
        <Link to={"/"}><i className="fa-solid fa-arrow-left"></i> /</Link>
        <Link to={"/about"}>/apropos <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <Title lvl="h1">
        Erreur 404 : Page introuvable
      </Title>
      <Title lvl="h2">Mais notre sens de l'humour est bien là !</Title>
      <Content classContent="p-description">
        Oops ! Il semblerait que vous ayez atteint une zone obscure de l'univers web. Ne vous inquiétez pas, je suis à la recherche de cette page disparue.
      </Content>
      <Content classContent="p-description">
        Si vous êtes d'humeur aventureuse, pourquoi ne pas explorer les recoins inexplorés de ce site ? Qui sait, vous pourriez tomber sur une fonctionnalité cachée ou une surprise savamment codée.
      </Content>
      <Content classContent="p-description">
        Merci de votre compréhension, et rappelez-vous toujours : "Il n'y a pas d'erreur, seulement des opportunités de debug !"
      </Content>

      <Button href="/" classBtn="btn mt-4">Retour a l'accueil</Button>
    </div>
  )
}