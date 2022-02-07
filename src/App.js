import {Route, Switch} from 'react-router-dom';

import {AuthProvider} from './contexts/AuthContext';

import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/Home/LandingPage";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import NotFound from './components/NotFound/NotFound';

import Register from "./components/UserCatalog/Register/Register";
import Login from "./components/UserCatalog/Login/Login";
import Logout from './components/UserCatalog/Logout/Logout';

import Candidates from "./components/CandidatesCatalog/Candidates/Candidates";
import AddCandidate from './components/CandidatesCatalog/AddCandidate/AddCandidate';
import CandidateProfile from './components/CandidatesCatalog/CandidateProfile/CandidateProfile';
import EditCandidate from './components/CandidatesCatalog/EditCandidate/EditCandidate';

import Jobs from "./components/JobsCatalog/Jobs/Jobs";
import CreateJobListing from './components/JobsCatalog/CreateJob/CreateJobListing';
import JobDetails from './components/JobsCatalog/DetailsJob/JobDetails';
import EditJob from './components/JobsCatalog/EditJob/EditJob';

import Interview from './components/InterviewsCatalog/Interviews/Interviews';
import AddInterview from './components/InterviewsCatalog/AddInterview';
import InterviewByJobId from './components/InterviewsCatalog/InterviewsByJobId';


function App() {
    
  return (
    <AuthProvider>
    <div className="App">

    < Navigation />

    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/about' component={About} />

      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register} />
      <Route path='/logout' component={Logout}/>

      <Route path='/jobs' exact component={Jobs}/>
      <Route path='/jobs/create' component={CreateJobListing} />
      <Route path='/jobs/:jobId' exact component={JobDetails} />
      <Route path='/jobs/edit/:jobId' exact component={EditJob}/>
      <Route path='/jobs/:jobId/interviews' exact component={InterviewByJobId} />
      <Route path='/jobs/:jobId/addInterview' exact component={AddInterview}/>

      <Route path='/candidates' exact component={Candidates} />
      <Route path='/candidates/create' component={AddCandidate}/>
      <Route path='/candidates/:candidateId' exact component={CandidateProfile} />
      <Route path='/candidates/edit/:candidateId' exact component={EditCandidate} />

      <Route path='/interviews' exact component={Interview}/>

      <Route component={NotFound}/>
    </Switch>

      < Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
