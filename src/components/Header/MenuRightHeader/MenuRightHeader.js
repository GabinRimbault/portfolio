import List from "../../../lib/components/base/List";

export default function MenuRightHeader() {
  const liens = {
    link1: {
      liens: ["/about", "A propos"]
    },
    link2: {
      liens: ["/experiences", "Experiences"]
    },
    link3: {
      liens: ["/labs", "Labs"]
    },
    link4: {
      liens: ["/contact", "Contact"]
    }
  }


  return (
    <header>
      <nav>
        <List type="ol" data={liens} />
      </nav>
    </header>
  )
}