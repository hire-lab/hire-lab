import { Link } from "react-router-dom"

export default function JobListing({
    job
}) {

    return (
        <div>
          <div className="feature-icon-wrap services-icons clearfix">
            <div className="left-side-icon">
                <i className="ion-ios-people-outline front-icon"></i>
            </div>
            <div className="features-text-right">
                <Link to={`/jobs/${job._id}`}><h3>{job.title}</h3> </Link>                       
                <p>{job.description}</p>
                <p>{job.requirements}</p>
            </div>
        </div>
    </div>
    )
}