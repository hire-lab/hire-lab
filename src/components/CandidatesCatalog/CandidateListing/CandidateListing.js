import { Link } from "react-router-dom";
import {  useCompanyAuthContext} from '../../../contexts/AuthCompanyContext';
import './CandidateListing.css'

export default function CandidateListing({
    candidate
}) {
    const {company} = useCompanyAuthContext()

    return (
        <div className="jobListingCard candidateListingCard">
            <div className="cardIcon candidateIcon">
                <i className="far fa-user front-icon jobsIcon"></i>
            </div>
            <div className="candidateListingInfo">
                <Link className="candidateDetailsLink" to={`/candidates/${company._id}/candidates/${candidate._id}`}><h4>{candidate.name}</h4></Link>
            </div>
        </div>
    )
}