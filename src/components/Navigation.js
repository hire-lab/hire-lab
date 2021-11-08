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
                <a className="navbar-brand alo" href="index.html">Hire Lab</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right scroll-to">
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#">Interviews</a></li>
                    <li><a href="#services">Jobs</a></li>
                    <li><a href="#candidates">Candidates</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#register">Register</a></li>
                    <li><a href="#">Logout</a></li>                      
                </ul>
            </div>
        </div>
    </nav>
    )
}