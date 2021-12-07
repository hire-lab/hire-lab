import {useState} from 'react';
import {AuthContext} from './contexts/AuthContext';
import {Route, Switch} from 'react-router-dom'

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/Home/LandingPage";
import About from "./components/About/About";
import Candidates from "./components/CandidatesCatalog/Candidates";
import Jobs from "./components/JobsCatalog/Jobs/Jobs";
import CreateJobListing from './components/JobsCatalog/CreateJob/CreateJobListing'
import Register from "./components/UserCatalog/Register/Register";
import Login from "./components/UserCatalog/Login/Login";
import Interview from './components/InterviewsCatalog/Interviews';
import CandidateProfile from './components/CandidatesCatalog/CandidateProfile';
import JobDetails from './components/JobsCatalog/DetailsJob/JobDetails';
import AddCandidate from './components/CandidatesCatalog/AddCandidate';

function App() {
    //add ErrorPage

    const [user, setUser] = useState({
      _id: '',
      accessToken: '',
      email: '',
      name: ''
    });

    const login = (authData) => {
      setUser(authData)
    }


  return (
    <AuthContext.Provider value={{user, login}}>
    <div className="App">

    < Navigation />

    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/about' component={About} />
      <Route path='/jobs' exact component={Jobs}/>
      <Route path= '/jobs/create' component={CreateJobListing} />
      <Route path='/jobs/:jobId' component={JobDetails} />
      <Route path='/candidates' exact component={Candidates} />
      <Route path='/candidates/create' component={AddCandidate}/>
      <Route path='/candidates/:candidateId' component={CandidateProfile} />
      <Route path='/interviews' component={Interview}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register} />
    </Switch>

      < Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
