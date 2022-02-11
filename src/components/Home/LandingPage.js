import { Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage() {
    return (
        <article className="homePage">
           
            <section className="homePageSection">
                <h1 className="homePageSectionTitle">welcome to Hire Lab</h1>
                <h4 className="homePageSectionSubtitle">Do you wish to attract and hire those key candidates that you will bring your company the best results?</h4>
                <Link className="homePageSectionBtn" to="/about">See more</Link>
            </section>
    </article>
    )
}