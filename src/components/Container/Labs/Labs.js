import {Link} from "react-router-dom";
import Title from "../../../lib/components/base/Title";
import Cards from "../../../lib/components/bloc/Cards/Cards";
import Content from "../../../lib/components/base/Content";
import List from "../../../lib/components/base/List";
import Button from "../../../lib/components/base/Button";

export default function Labs() {

  const tags = ["#tag1", "#tag2", "#tag3"]

  const liens = {
    download: {
      liens: ["https://twitter.com/rimbault_gabin", <i className="fas fa-share-square fa-rotate-270"></i>]
    },
    share: {
      liens: ["https://www.linkedin.com/in/gabin-rimbault/", <i className="fa-brands fa-github"></i>]
    }
  }

  return (
    <div className="labs">
      <div className="menu_mobile">
        <Link to={"/experiences"}><i className="fa-solid fa-arrow-left"></i> /experiences</Link>
        <Link to={"/contact"}>/contact <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <Title classTitle="heading" lvl="h2">Labs</Title>
      <div className="labs_mobile">
        <Cards>
          <Content style="p-overline">Projet à la une :</Content>
          <Title lvl="h3">Titre Projet #1</Title>
          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Content>
          <List type="ul" data={tags} classList="cards_tags" />
          <List type="ul" data={liens} classList="cards_links" />
        </Cards>
        <Cards>
          <Content style="p-overline">Projet à la une :</Content>
          <Title lvl="h3">Titre Projet #2</Title>
          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Content>
          <List type="ul" data={tags} classList="cards_tags" />
          <List type="ul" data={liens} classList="cards_links" />
        </Cards>
      </div>
      <div className="labs_desktop">
        Desktop
      </div>
      <Button href="/contact" classBtn="btn mt-4">
        Et si on discutait ? <i className="fa-sharp fa-solid fa-mug-saucer"></i>
      </Button>
    </div>
  )
}