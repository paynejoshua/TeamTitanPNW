import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Switch from "react-router-dom/Switch";
import PageNav from "./components/PageNavigation";
import imgUpload from "./components/PhotoUpload/index";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


 

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
       <Route exact path="/imageupload" component={imgUpload} />
       <Route exact path="/teamtitanadminpage" component={PageNav.adminPage}  />
       <Route exact path="/teamtitanadminlogin" component={PageNav.adminLogin}  />
     </Switch>
   </Router>
  );
}

export default App;
