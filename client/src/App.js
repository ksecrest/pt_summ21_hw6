import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { NoMatch } from "./Components/NoMatch";
import { NavBar } from "./Components/NavBar";
import { Theaters } from "./TheaterPages/Theaters";
import { Theater } from "./TheaterPages/Theater";
import Movie from "./MoviePages/Movie";
import { TheaterForm } from "./TheaterPages/TheaterForm";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/theaters" component={Theaters} />
        <Route exact path="/theater/:id" component={Theater} />
        <Route exact path="/addtheater" component={TheaterForm} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
