import uniqid from 'uniqid';
import CandidateProfile from "./CandidateProfile"

export default function Candidates() {
    const candidates = [
        {id: uniqid(),
        image: "images/team-1.jpg",
        name: "Daniel Smith",
        position: "Sales Manager"},

        {id: uniqid(),
        image: "images/team-3.jpg",
        name: "Lisa Cudrow",
        position: "Art Director"},

        {id: uniqid(),
        image: "images/team-2.jpg",
        name: "Mike Ross",
        position: "Graphic Designer"},
    ]

    return (
        <div className="team" id="candidates">
             <div className="container">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="section-title text-center">
                        <h1> <span className="alo">TOP</span> Applicants</h1> 
                        <span className="border-line"></span>
                        <p className="lead subtitle-caption">
                        You are here because people are important to you!
                        </p>
                    </div>
                </div>
              </div>
            <div className="row">
                {candidates.map(candidate => 
                    <div key={candidate.id}>
                        <CandidateProfile 
                            image = {candidate.image}
                            name = {candidate.name}
                            position = {candidate.position}/>
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}