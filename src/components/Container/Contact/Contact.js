import {Link} from "react-router-dom";
import Content from "../../../lib/components/base/Content";
import Title from "../../../lib/components/base/Title";

export default function Contact() {
  return (
    <>
      <div className="menu_mobile">
        <Link to={"/labs"}><i className="fa-solid fa-arrow-left"></i> /labs</Link>
        <Link to={"/"}>/ <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="text-center contact">
        <Title classTitle="heading" lvl="h2">Et maintenant ?</Title>
        <Content classContent={"p-description"}>
          Si vous recherchez un développeur web passionné, compétent et motivé, ne cherchez plus ! Je suis prêt à mettre mes compétences et ma passion au service de votre entreprise.
        </Content>
        <Content classContent={"p-description mt-3"}>
          Contactez-moi dès maintenant pour discuter de vos besoins en développement web et explorer comment je peux contribuer à votre succès. Ensemble, nous pouvons créer des expériences numériques exceptionnelles et atteindre de nouveaux sommets.
        </Content>
        <Content classContent={"p-description mt-3 mb-4"}>
          Je suis impatient de collaborer avec vous pour réaliser des projets Web passionnants et marquants !
        </Content>
        <a href="mailto:gabin.rimbault@icloud.com?subject='Hello ! from Website'" className={"btn mt-4"}>
          Dites moi Bonjour <i className="fa-solid fa-hand-peace"></i>
        </a>
      </div>
    </>
  )
}