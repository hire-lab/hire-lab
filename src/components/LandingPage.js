import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
            <div className="tp-banner fullwidthbanner"  id="home">
                <ul>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500">
                        <img src="images/bg-1.jpg" alt="desk" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />
                        <div className="tp-caption slider-title" data-x="center" data-y="center"  data-voffset="-30" data-speed="500" data-start="1200" data-easing="Power4.easeInOut">
                            welcome to <span>Hire Lab</span>
                        </div> 
                        <div className="tp-caption slider-caption" data-x="center" data-y="center" data-voffset="40" data-speed="500" data-start="1800" data-easing="Power4.easeInOut" data-captionhidden="on">
                            Do you wish to attract and hire those key candidates that you will bring your company the best results?
                        </div>
                        <div className="tp-caption slider-button scroll-to" data-x="center" data-y="center" data-voffset="120" data-speed="500" data-start="2400" data-easing="Power4.easeInOut" data-captionhidden="on">
                            <Link className="btn btn-white" to="/about">See more</Link>
                        </div>
                    </li>
                  
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500">
            
                        <img src="images/bg-3.jpg" alt="desk" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />

                        <div className="tp-caption slider-title" data-x="center" data-y="center"  data-voffset="-30" data-speed="500" data-start="1200" data-easing="Power4.easeInOut">
                           <span>Hire</span> Lab
                        </div>

              
                        <div className="tp-caption slider-caption" data-x="center" data-y="center" data-voffset="40" data-speed="500" data-start="1800" data-easing="Power4.easeInOut" data-captionhidden="on">
                            You are here because people are important to you!
                        </div>

             
                        <div className="tp-caption slider-button scroll-to" data-x="center" data-y="center" data-voffset="120" data-speed="500" data-start="2400" data-easing="Power4.easeInOut" data-captionhidden="on">
                            <a className="btn btn-white" href="#about">See more</a>
                        </div> 
                    </li>
               
                </ul>
            </div>
    )
}
