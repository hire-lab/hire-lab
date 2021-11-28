import {Route, Switch} from 'react-router-dom'

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Candidates from "./components/CandidatesCatalog/Candidates";
import Jobs from "./components/JobsCatalog/Jobs";
import CreateJobListing from './components/JobsCatalog/CreateJobListing'
import Register from "./components/Register";
import Login from "./components/Login";
import Interview from './components/Interviews';
import CandidateProfile from './components/CandidatesCatalog/CandidateProfile';
import JobDetails from './components/JobsCatalog/JobDetails';

function App() {

    //add ErrorPage

  return (
    <div className="App">

    < Navigation />

    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/about' component={About} />
      <Route path='/jobs' exact component={Jobs}/>
      <Route path= '/jobs/create' component={CreateJobListing} />
      <Route path='/jobs/:jobId' component={JobDetails} />

      <Route path='/candidates' exact component={Candidates} />
      <Route path='/candidates/:candidateId' component={CandidateProfile} />
      <Route path='/interviews' component={Interview}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register} />
    </Switch>

    < Footer />
    </div>
  );
}

export default App;
