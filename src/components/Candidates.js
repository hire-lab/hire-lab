import CandidateProfile from "./CandidateProfile"

export default function Candidates() {

    return (
        <div className="team" id="candidates">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="section-title text-center">
                        <h1> <span className="alo">Hire Lab</span> Applicants</h1> 
                        <span className="border-line"></span>
                        <p className="lead subtitle-caption">
                        You are here because people are important to you!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <CandidateProfile
                    image= "images/team-1.jpg"
                    name="Daniel Smith"
                    position="Sales Manager"
                />
                <CandidateProfile
                    image = "images/team-3.jpg"
                    name="Lisa Cudrow"
                    position="Art Director"
                />
                <CandidateProfile
                    image = "images/team-2.jpg"
                    name="Mike Ross"
                    position="Graphic Designer"
                />

            </div>
        </div>
    </div>
    )
}