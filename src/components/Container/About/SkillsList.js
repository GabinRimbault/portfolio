import List from "../../../lib/components/base/List";

export default function SkillsList() {

  const data1 = ['HTML5', 'CSS3', 'Javascript (ES6)']
  const data2 = ['React', 'Python', 'Node.JS']


  return (
    <div className="skills_list">
      <List classList="skills" type="ul" data={data1} />
      <List classList="skills" type="ul" data={data2} />
    </div>
  )
}