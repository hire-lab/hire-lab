export default function Navigation ({
   navChangeHandler
}) {

    const onNavClick = (e) => {
        e.preventDefault();

        if(e.target.tagName == 'A'){
            let url = new URL(e.target.href)
            navChangeHandler(url.pathname)
        }
    }


    return (
        <nav onClick={onNavClick} className="navbar navbar-default navbar-fixed-top before-color">
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
                    <li className="active"><a href="/home">Home</a></li>
                    <li><a href="/interviews">Interviews</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/jobs">Jobs</a></li>
                    <li><a href="/candidates">Candidates</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/logout">Logout</a></li>                      
                </ul>
            </div>
        </div>
    </nav>
    )
}