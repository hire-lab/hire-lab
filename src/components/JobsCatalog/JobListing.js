export default function JobListing({
    job
}) {

    return (
        <div className="col-sm-6 margin-bottom30">
        <div className="feature-icon-wrap services-icons clearfix">
            <div className="left-side-icon">
                <i className={job.icon}></i>
            </div>
            <div className="features-text-right">
                <h3>{job.title}</h3>                        
                <p>{job.description}</p>
                <p>{job.requirements}</p>
            </div>
        </div>
    </div>
    )
}