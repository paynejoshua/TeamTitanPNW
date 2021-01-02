import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Switch from "react-bootstrap/esm/Switch";
import PageNav from "./components/PageNavigation"
import './App.css';

function App() {
  return (
   <Router> 
     <Switch>
       <Route exact path="/" component={PageNav.home} />
       <Route exact path="/home" component={PageNav.home} />
       <Route exact path="/aboutUs" component={PageNav.aboutUs} />
       <Route exact path="/contactUs" component={PageNav.contactUs} />
       <Route exact path="/events" component={PageNav.events} />
       <Route exact path="/media" component={PageNav.media} />
       <Route exact path="/meetTheTeam" component={PageNav.meetTheTeam} />
     </Switch>
   </Router>
  );
}

export default App;
