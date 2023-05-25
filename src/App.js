import "./lib/styles/all.css"
import MenuLeft from "./components/Left/MenuLeft";
import MenuRight from "./components/Right/MenuRight";
import Container from "./components/Container/Container";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={"wrapper_app"}>
      <BrowserRouter>
        <Header />
        <div className={"app"}>
          <MenuLeft />
          <Container />
          <MenuRight />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
