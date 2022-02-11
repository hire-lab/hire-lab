import { Link } from "react-router-dom";
import './CandidateListing.css'

export default function CandidateListing({
    candidate
}) {

    return (
        <div className="jobListingCard candidateListingCard">
            <div className="cardIcon candidateIcon">
                <i className="far fa-user front-icon jobsIcon"></i>
            </div>
            <div className="candidateListingInfo">
                <Link className="candidateDetailsLink" to={`/candidates/${candidate._id}`}><h4>{candidate.name}</h4></Link>
            </div>
        </div>
    )
}