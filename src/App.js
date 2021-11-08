import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingBanner from "./components/LandingPage";
import About from "./components/About";
import Candidates from "./components/Candidates";
import Jobs from "./components/Jobs";
import Blog from "./components/Blog";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">

    < Navigation />

    < LandingBanner />

    < About />

    < Candidates />

    < Jobs />

    < Login />

    < Register />


        <div className="testimonials parallax-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 text-center">
                        <div className="flexslider testislider">
                            <ul className="slides">
                                <li>
                                    <div className="slide-items">
                                        <img src="images/team-1.jpg" alt="" />
                                        <p>
                                            Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. 
                                        </p>
                                        <h5>Maria Navratilova - Codeflicks inc.</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="slide-items">
                                        <img src="images/team-2.jpg" alt="" />
                                        <p>
                                            Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. 
                                        </p>
                                        <h5>Maria Navratilova - Codeflicks inc.</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="slide-items">
                                        <img src="images/team-3.jpg" alt="" />
                                        <p>
                                            Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. 
                                        </p>
                                        <h5>Maria Navratilova - Codeflicks inc.</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section id="work" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="section-title text-center">
                            <h1> <span className="alo">Bonativo</span> Portfolio</h1> 
                            <span className="border-line"></span>
                            <p className="lead subtitle-caption">
                                Vivamus congue diam vitae tortor imperdiet congue.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-1.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-1.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-2.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-2.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-3.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-3.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-4.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-4.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-5.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-5.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-6.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-6.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-7.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-7.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-8.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-8.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="entry-thumb portfolio-thumb">
                            <div className="imgoverlay text-light">
                                <a href="images/work-9.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                                    <img src="images/work-9.jpg" className="img-responsive" alt="" />
                                    <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style={{marginTop: "-11px"}}><h6>Branding</h6></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>





        <section id="contact" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="row contact-details">
                            <div className="col-sm-4 margin-bottom30 text-center">
                                <i className="ion-ios-location-outline"></i>
                                <h4>California, Usa</h4>
                            </div>
                            <div className="col-sm-4 margin-bottom30 text-center">
                                <i className="ion-ios-email-outline"></i>
                                <h4>support@Bonativo.com</h4>
                            </div>
                            <div className="col-sm-4 margin-bottom30 text-center">
                                <i className="ion-ios-telephone-outline"></i>
                                <h4>+01 - 4567 - 65678</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">

                        <form name="sentMessage" className="contact-form" method="post" novalidate>
                            <h3>Drop us a line</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row control-group">
                                        <div className="form-group col-xs-12 controls">

                                            <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                            <p className="help-block"></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-12">
                                    <div className="row control-group">
                                        <div className="form-group col-xs-12 controls">

                                            <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                            <p className="help-block"></p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="row control-group">
                                <div className="form-group col-xs-12  controls">

                                    <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block"></p>
                                </div>
                            </div>
                            <div className="row control-group">
                                <div className="form-group col-xs-12 controls">

                                    <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="row">
                                <div className="form-group col-xs-12 text-right">
                                    <button type="submit" className="btn btn-white btn-lg">Send Message</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
        < Footer />
    </div>
  );
}

export default App;
