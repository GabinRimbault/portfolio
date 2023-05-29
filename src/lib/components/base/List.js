export default function List({ type = "ul", data = [] | {}, classList }) {
  const Type = type === "ol" || type === "ul" ? type : "ul";
  let listItems = null;

  if (Array.isArray(data)) {
    listItems = data.map((value, key) => {
      return <li key={key}>{value}</li>;
    });
  } else if (typeof data === "object" && data !== null) {
    listItems = Object.entries(data).map(([key, value], index) => (
      <li key={index} id={key}>
        <a alt={"Lien " +key} href={value.liens[0]}>{value.liens[1]}</a>
      </li>
    ));
  }

  return (
    <Type className={classList !== undefined ? "list " + classList : "list"}>
      {listItems}
    </Type>
  );
}
/*
Exemple :

const liens = {
    link1: {
      liens: ["www.googe.fr", "Google"]
    },
    link2: {
      liens: ["www.ebay.fr", "Ebay"]
    }
  }
 */
