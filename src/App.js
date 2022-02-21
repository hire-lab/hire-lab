import {Route, Switch} from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { AuthCompanyProvider } from './contexts/AuthCompanyContext';
import { NotificationProvider } from './contexts/NotificationContext';

import LandingPage from './components/Home/LandingPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import NotFound from './components/Common/NotFound/NotFound';
import Notification from './components/Common/Notification/Notification';

import Login from './components/UserCatalog/Login/Login';
import Register from './components/UserCatalog/Register/Register';
import Logout from './components/UserCatalog/Logout/Logout';
import UserProfile from './components/UserCatalog/UserProfile/UserProfile';
import EditProfile from './components/UserCatalog/EditProfile/EditProfile';

import CompanyLogin from './components/CompanyCatalog/Login/Login';
import CompanyRegister from './components/CompanyCatalog/Register/Register';
import CompanyLogout from './components/CompanyCatalog/Logout/Logout';

import Jobs from './components/JobsCatalog/Jobs/Jobs';
import CreateJobListing from './components/JobsCatalog/CreateJob/CreateJobListing';
import JobDetails from './components/JobsCatalog/JobDetails/JobDetails';
import EditJob from './components/JobsCatalog/EditJob/EditJob';
import JobsByCompanyId from './components/JobsCatalog/JobsByCompanyId/JobsByCompanyId';
import CandidatesByJobId from './components/CandidatesCatalog/CandidatesByJobId/CandidatesByJobId';

import Candidates from './components/CandidatesCatalog/Candidates/Candidates';
import AddCandidate from './components/CandidatesCatalog/AddCandidate/AddCandidate';
import CandidateProfile from './components/CandidatesCatalog/CandidateProfile/CandidateProfile';
import EditCandidate from './components/CandidatesCatalog/EditCandidate/EditCandidate';

import Interviews from './components/InterviewsCatalog/Interviews/Interviews';
import AddInterview from './components/InterviewsCatalog/AddInterview/AddInterview';
import InterviewsaByJobId from './components/InterviewsCatalog/InterviewsByJobId/InterviewsByJobId';


function App() {
  return (
    <AuthCompanyProvider>
    <AuthProvider>
    <NotificationProvider>
     <div className="App">
      <Navigation />
      <Notification />
      
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/about' component={About} />

        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register} />
        <Route path='/logout' component={Logout} />
        <Route path='/users/:id' exact component={UserProfile}/>
        <Route path='/users/:id/edit' component={EditProfile}/>

        <Route path='/company/login' component={CompanyLogin}/>
        <Route path='/company/register' component={CompanyRegister} />
        <Route path='/company/logout' component={CompanyLogout} />

        <Route path='/jobs' exact component={Jobs} />
        <Route path='/jobs/create' component={CreateJobListing}/>
        <Route path='/jobs/:jobId' exact component={JobDetails}/>
        <Route path='/jobs/:jobId/candidates' exact component={CandidatesByJobId}/>
        <Route path='/jobs/:companyId/jobs' exact component={JobsByCompanyId}/>
        <Route path='/jobs/edit/:jobId' exact component={EditJob}/>
        <Route path='/jobs/:jobId/interviews' exact component={InterviewsaByJobId} />
        <Route path='/jobs/:jobId/addInterview' exact component={AddInterview} />
        
        <Route path='/candidates/:companyId/candidates' exact component={Candidates} />
        <Route path='/candidates/create' component={AddCandidate} />
        <Route path='/candidates/:companyId/candidates/:candidateId' exact component={CandidateProfile}/>
        <Route path='/candidates/edit/:candidateId' exact component={EditCandidate}/>
        
        <Route path='/interviews' exact component={Interviews} />

        <Route component={NotFound}/>
      </Switch>

      <Footer />
      </div>
      
      </NotificationProvider>
    </AuthProvider>
    </AuthCompanyProvider>
  );
}

export default App;
