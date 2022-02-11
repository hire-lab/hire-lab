import { Link } from "react-router-dom";
import './JobListing.css'

export default function JobListing({
    job
}) {

    return (
        <div className="jobListingCard">
            <div className="cardIcon">
                <i className="fas fa-users front-icon jobsIcon"></i>
            </div>
            <div className="jobListingInfo">
                <Link to={`/jobs/${job._id}`}><h3>{job.title}</h3> </Link>                       
                <p>{job.description}</p>
            </div>
        </div>
    )
}