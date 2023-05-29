import List from "../../../lib/components/base/List";
import config from "../../../config/config";

export default function SkillsExperiences() {
  return (
    <div className={"col-md-5"}>
      <List classList="skills" type="ul" data={config.skills} />
    </div>
  )
}