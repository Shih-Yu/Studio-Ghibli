import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Films from "./components/Films";
import People from "./components/People";
import Locations from "./components/Locations";
import Species from "./components/Species";
import Vehicles from "./components/Vehicles";

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/films" component={ Films } />
          <Route path="/people" component={ People } />
          <Route path="/locations" component={ Locations } />
           <Route path="/species" component={ Species } />
          <Route path="/vehicles" component={ Vehicles } /> 
      </Switch>
      </div>
    </Router>
  )
}

export default App;