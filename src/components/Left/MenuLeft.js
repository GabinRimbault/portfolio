import List from "../../lib/components/base/List";

export default function MenuLeft() {

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
    <>
      <List data={liens} classList={"menu_left"} type={"ul"} />
    </>
  )
}

