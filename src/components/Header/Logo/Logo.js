import {Link} from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/"><i className="fa-solid fa-code"></i></Link>
    </div>
  )
}