import List from "../../../lib/components/base/List";
import config from "../../../config/config";
import NavBar from "../../../lib/components/bloc/NavBar/NavBar";

export default function MenuRightHeader() {
  return (
    <NavBar>
      <List type="ol" data={config.header} />
    </NavBar>
  )
}