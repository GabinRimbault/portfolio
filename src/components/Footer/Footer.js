import Content from "../../lib/components/base/Content";
import List from "../../lib/components/base/List";

export default function Footer() {
  const liens = {
    link1: {
      liens: ["https://twitter.com/rimbault_gabin", <i className="fa-brands fa-square-twitter"></i>]
    },
    link2: {
      liens: ["https://www.linkedin.com/in/gabin-rimbault/", <i className="fa-brands fa-linkedin"></i>]
    },
    link3: {
      liens: ["https://github.com/GabinRimbault", <i className="fa-brands fa-square-github"></i>]
    },
    link4: {
      liens: ["mailto:gabin.rimbault@icloud.com?subject='Hello ! from Website'", <i className="fa-solid fa-envelope"></i>]
    }
  }

  return (
    <footer>
      <Content>Designed & Build by Gabin Rimbault © 2023-present</Content>
      <List data={liens} classList={"social"} type={"ul"} />
    </footer>
  )
}