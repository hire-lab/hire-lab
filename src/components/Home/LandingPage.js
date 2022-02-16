import { Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage() {
    return (
        <article className="homePage">
           
            <section className="homePageSection">
                <h1 className="homePageSectionTitle">welcome to Hire Lab</h1>
                <section className="homePageSectionSubtitle">
                    <h4>Looking for a job?</h4>
                    <h4>Looking for the perfect candidate?</h4>
                    <h4>You are in the right place.</h4>
                </section>
                <Link className="homePageSectionBtn" to="/about">See more</Link>
            </section>
    </article>
    )
}