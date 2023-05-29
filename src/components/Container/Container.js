import Wrapper from "../../lib/components/base/Wrapper";
import {Route, Switch} from "react-router-dom";
import Index from "./Index/Index";
import About from "./About/About";
import Experiences from "./Experiences/Experiences";
import Labs from "./Labs/Labs";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";

export default function Container() {
  return (
    <>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/labs" component={Labs} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
    </>
  )
}