import { Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage2() {
    return (
        <article className="homePage">
            <img className="homePageImg" src="/images/bg-3.jpg" alt="home" />
           
            <section className="homePageSection">
                <h1 className="homePageSectionTitle">welcome to Hire Lab</h1>
                <h4 className="homePageSectionSubtitle">Do you wish to attract and hire those key candidates that you will bring your company the best results?</h4>
                <Link className="homePageSectionBtn" to="/about">See more</Link>
            </section>
    </article>
    )
}