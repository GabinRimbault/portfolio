import List from "../../lib/components/base/List";
import config from "../../config/config";

export default function MenuLeft() {
  return (
    <>
      <List data={config.icons} classList={"menu_left"} type={"ul"} />
    </>
  )
}

