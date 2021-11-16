import { useState, createElement } from "react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Candidates from "./components/Candidates";
import Jobs from "./components/Jobs";
import Register from "./components/Register";
import Login from "./components/Login";
import CandidateProfile from "./components/CandidateProfile";

function App() {
    const [page, setPage] = useState('/home');

    //add Profile and Interviews, ErrorPage
    //improve About page

    const routes = {
        '/home': <LandingPage />,
        '/about': <About />,
        '/jobs': <Jobs />,
        '/candidates': <Candidates />,
        '/profile': <CandidateProfile />,
        '/login': <Login />,
        '/register': <Register />
    }

    const navChangeHandler = (path) => {
       setPage(path)
    }

  return (
    <div className="App">

    < Navigation 
        navChangeHandler={navChangeHandler}
    />

      { routes[page] || <h2>No page found.</h2>}

    < Footer />
    </div>
  );
}

export default App;
