import {Link} from 'react-router-dom'

export default function Navigation () {
    return (
        <nav className="navbar navbar-default navbar-fixed-top before-color">
          <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand alo" to="/">Hire Lab</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right scroll-to">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/interviews">Interviews</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/candidates">Candidates</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/logout">Logout</Link></li>                      
                </ul>
            </div>
        </div>
    </nav>
    )
}