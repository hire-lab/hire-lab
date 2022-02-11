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
                    <p>Thousands of candidates apply to the recruitment ads posted on the Internet, a large part of them having nothing in common with the position, but the time spent on viewing their CVs accumulates.</p>
                </div>
            </section>
            <section className="aboutPageTextCard">
                <div className="cardIcon">
                    <i className="fas fa-mobile-alt front-icon"></i>
                    <i className="fas fa-mobile-alt back-icon"></i>
                </div>
                <div className="aboutPageTextCardContent">
                    <p>Those qualified after the initial screening stage are called in for a first interview, but some of those with appointments simply do not come to the interview; it goes without saying that this stage leads to a great loss of valuable time!</p>
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
                    <p>Even initial interviews, when held with own personnel, represent time spent less efficiently when the candidates are inadequate.</p>
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