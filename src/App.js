import {Route, Switch} from 'react-router-dom'

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Candidates from "./components/CandidatesCatalog/Candidates";
import Jobs from "./components/JobsCatalog/Jobs";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {

    //add Profile and Interviews, ErrorPage
    //improve About page

  return (
    <div className="App">

    < Navigation />

    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/about' component={About} />
      <Route path='/jobs' component={Jobs}/>
      <Route path='/candidates' component={Candidates} />
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register} />
    </Switch>

    < Footer />
    </div>
  );
}

export default App;
