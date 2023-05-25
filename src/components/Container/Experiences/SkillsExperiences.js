import Skills from "../../../lib/components/bloc/Skills/Skills";

export default function SkillsExperiences() {
  return (
    <div className={"col-md-6"}>
      <Skills technos={"frontend"} progress={"skill_progress"}>Front-End</Skills>
      <Skills technos={"html"} progress={"skill_progress"}>Html5/CSS3</Skills>
      <Skills technos={"react"} progress={"skill_progress"}>React</Skills>
      <Skills technos={"javascript"} progress={"skill_progress"}>JavaScript</Skills>
      <Skills technos={"nodejs"} progress={"skill_progress"}>Node.js</Skills>
      <Skills technos={"java"} progress={"skill_progress"}>Java/Spring</Skills>
    </div>
  )
}