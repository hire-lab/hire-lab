import {Route, Switch} from 'react-router-dom';

import {AuthProvider} from './contexts/AuthContext';

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/Home/LandingPage";
import About from "./components/About/About";
import Candidates from "./components/CandidatesCatalog/Candidates/Candidates";
import Jobs from "./components/JobsCatalog/Jobs/Jobs";
import CreateJobListing from './components/JobsCatalog/CreateJob/CreateJobListing'
import Register from "./components/UserCatalog/Register/Register";
import Login from "./components/UserCatalog/Login/Login";
import Interview from './components/InterviewsCatalog/Interviews';
import InterviewByJobId from './components/InterviewsCatalog/InterviewsByJobId';
import CandidateProfile from './components/CandidatesCatalog/CandidateProfile/CandidateProfile';
import JobDetails from './components/JobsCatalog/DetailsJob/JobDetails';
import AddCandidate from './components/CandidatesCatalog/AddCandidate/AddCandidate';
import EditJob from './components/JobsCatalog/EditJob/EditJob';
import Logout from './components/UserCatalog/Logout/Logout';
import NotFound from './components/NotFound/NotFound';

function App() {
    
  return (
    <AuthProvider>
    <div className="App">

    < Navigation />

    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/about' component={About} />
      <Route path='/jobs' exact component={Jobs}/>
      <Route path= '/jobs/create' component={CreateJobListing} />
      <Route path='/jobs/:jobId' exact component={JobDetails} />
      <Route path='/jobs/edit/:jobId' component={EditJob}/>
      <Route path='/candidates' exact component={Candidates} />
      <Route path='/candidates/create' component={AddCandidate}/>
      <Route path='/candidates/:candidateId' component={CandidateProfile} />
      <Route path='/interviews' exact component={Interview}/>
      <Route path='/interviews/:jobId' exact component={InterviewByJobId} />
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register} />
      <Route path='/logout' component={Logout}/>
      <Route component={NotFound}/>
    </Switch>

      < Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
