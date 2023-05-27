import Content from "../../../lib/components/base/Content";

export default function TextExperiences() {

  const liens_front = "https://www.zdnet.fr/pratique/developpement-front-end-ou-back-end-quelle-est-la-difference-39936609.htm"
  const liens_w3C = "https://www.w3.org/";
  const liens_accessible = "https://www.w3.org/WAI/fundamentals/accessibility-intro/fr";

  return (
    <div className="text_experiences col-md-6">
      <Content classContent={"p-description"}>
        J'ai acquis une solide expérience en développement front-end, notamment sur les technologies clés telles que
        <a href={liens_w3C} target="_blank">HTML, CSS, et JavaScript</a>. Au fil des années, j'ai travaillé sur de nombreux projets web où j'ai eu l'opportunité
        de créer des interfaces utilisateur attrayantes et réactives.
      </Content>
      <Content classContent={"p-description"}>
        L'expertise en développement <a href={liens_front} target="_blank">front-end</a> est essentielle dans le monde numérique d'aujourd'hui.
        En tant que développeur front-end, je suis chargé de traduire les concepts et les maquettes graphiques
        en interfaces utilisateur fonctionnelles et attrayantes. Mon expérience approfondie dans ses technologies
        me permet de comprendre les besoins des utilisateurs et de créer des expériences de navigation
        fluides et intuitives.
      </Content>
      <Content classContent={"p-description"}>
        En plus de mes compétences en développement, j'ai également une solide expérience dans la création de sites <a
        href={liens_accessible} target="_blank">web accessibles</a>.
        Je comprends l'importance de rendre le web inclusif et accessible à tous.  Je suis familier avec les bonnes pratiques en matière
        d'accessibilité, telles que l'utilisation de balises appropriées, la gestion des contrastes de couleurs, la création de contenu adapté
        aux lecteurs d'écran et l'optimisation de la navigation au clavier.
      </Content>
    </div>
  )
}