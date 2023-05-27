import {Link} from "react-router-dom";
import Title from "../../../lib/components/base/Title";
import Cards from "../../../lib/components/bloc/Cards/Cards";
import Content from "../../../lib/components/base/Content";
import List from "../../../lib/components/base/List";
import Button from "../../../lib/components/base/Button";
import useSWR from "swr";
import {useEffect} from "react";
import TextLabs from "./TextLabs";

export default function Labs() {

  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error } = useSWR('https://api.github.com/users/GabinRimbault/repos', fetcher);

  return (
    <div className="labs">
      <div className="menu_mobile">
        <Link to={"/experiences"}><i className="fa-solid fa-arrow-left"></i> /experiences</Link>
        <Link to={"/contact"}>/contact <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <Title classTitle="heading" lvl="h2">Labs</Title>
      <TextLabs />
      <div className="labs_cards">
      {error && <>{error.message}</>}
      {data && data.slice(0, 6).map((repos, key) => {
          const tags = [repos.language];
          const liens = {
            download: {
              liens: [repos.clone_url, <i className="fas fa-share-square fa-rotate-270"></i>]
            },
            share: {
              liens: [repos.downloads_url, <i className="fa-brands fa-github"></i>]
            }
          };

          return (
            <Cards key={key}>
              <Content classContent="p-overline">Projet à la une :</Content>
              <Title lvl="h3">{repos.name}</Title>
              <Content classContent="p-labs">{repos.description ? repos.description : "Il n'y a pas de description pour ce projet"}</Content>
              <List type="ul" data={tags} classList="cards_tags" />
              <List type="ul" data={liens} classList="cards_links" />
            </Cards>
          );
        })}
      </div>
      <Content classContent="p-description mt-4">Pour voir d'autre projet retrouvez moi sur <a href="https://github.com/GabinRimbault" target="_blank">Github</a></Content>
      <Button href="/contact" classBtn="btn mt-4">
        Et si on discutait ? <i className="fa-sharp fa-solid fa-mug-saucer"></i>
      </Button>
    </div>
  )
}