import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { NoMatch } from "./Components/NoMatch";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
