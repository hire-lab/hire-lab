import './About.css'

export default function About() {
    return (        
    <section className="aboutPage">
        <article className="aboutPageTitleSection">
            <h1 className="aboutPageTitle">Hire Lab</h1>
            <span className="aboutPageTitleUnderline"></span>
            <p className="aboutPageTitleInfo">This challenge of finding the perfect candidate is real, and it happens so, because:</p>
        </article>
        <article className="aboutPageText">
            <section className="aboutPageTextCard">
                <div className="lcardIcon">
                    <i className="fas fa-users front-icon"></i>
                    <i className="fas fa-users back-icon"></i>
                </div>
                <div className="aboutPageTextCardContent">
                    <p>Hire Lab posts listings for job seekers in every industry, every level from entry to executive, and every lifestyle (freelance, part-time, internship, full-time). Candidates can search by job title and location. </p>
                </div>
            </section>
            <section className="aboutPageTextCard">
                <div className="cardIcon">
                    <i className="fas fa-mobile-alt front-icon"></i>
                    <i className="fas fa-mobile-alt back-icon"></i>
                </div>
                <div className="aboutPageTextCardContent">
                    <p>To start your search on Hire Lab, you can create a profile, upload a link to your resume. You can also browse active listings using the site’s search bar. On each job listing, you’ll see information about the position.</p>
                </div>
            </section>
        </article>
        <article className="aboutPageText">
            <section className="aboutPageTextCard">
                <div className="cardIcon">
                    <i className="fas fa-cog front-icon"></i>
                    <i className="fas fa-cog back-icon"></i>
                </div>
                <div className="aboutPageTextCardContent">
                    <p>Hire Lab adds up-to-date job listings in dozens of fields including education, finance, healthcare, law, marketing, and tech. The site is free to use, both for companies and job seekers, who can browse through all opportunities.</p>
                </div>
            </section>
            <section className="aboutPageTextCard">
                <div className="cardIcon">
                    <i className="far fa-lightbulb front-icon"></i>
                    <i className="far fa-lightbulb back-icon"></i>
                </div>
                <div className="aboutPageTextCardContent">
                    <p>One of the most often met challenges in companies, in terms of recruitment and human resources selection, is related to the time lost with recruitment/executive search processes, time which could be used more productively for business!</p>
                </div>
            </section>
        </article>
       
    </section>
)
}