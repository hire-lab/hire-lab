export default function JobListing({icon, title, location, description, requirements}) {
    return (
        <div className="col-sm-6 margin-bottom30">
        <div className="feature-icon-wrap services-icons clearfix">
            <div className="left-side-icon">
                <i className={icon}></i>
            </div>
            <div className="features-text-right">
                <h3>{title}</h3>
                <p>{location}</p>                         
                <p>{description}</p>
                <p>{requirements}</p>
            </div>
        </div>
    </div>
    )
}