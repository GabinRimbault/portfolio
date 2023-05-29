import Content from "../../lib/components/base/Content";
import List from "../../lib/components/base/List";
import config from "../../config/config";

export default function Footer() {
  return (
    <footer>
      <Content>Designed & Build by Gabin Rimbault © 2023-present</Content>
      <List data={config.icons} classList={"social"} type={"ul"} />
    </footer>
  )
}