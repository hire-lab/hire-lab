export default function CandidateProfile(props) {

    return (
        <>
        <div className="col-sm-4 margin-bottom30">
        <div className="team-box">
            <img src={props.image} className="img-responsive" alt="" />

            <ul className="social list-inline">
                <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
            </ul>
        </div>
        <div className="team-desc">
            <h4>{props.name}</h4>
            <em>{props.position}</em>
        </div>
        </div>
        <div className="col-sm-4 margin-bottom30">
        <div className="team-box">
            <img src="images/team-2.jpg" className="img-responsive" alt="" />

            <ul className="social list-inline">
                <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
            </ul>
        </div>
        <div className="team-desc">
            <h4>{props.name}</h4>
            <em>{props.position}</em>
        </div>
        </div>
        <div className="col-sm-4 margin-bottom30">
        <div className="team-box">
            <img src="images/team-3.jpg" className="img-responsive" alt="" />

            <ul className="social list-inline">
                <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
            </ul>
        </div>
        <div className="team-desc">
            <h4>{props.name}</h4>
            <em>{props.position}</em>
        </div>
        </div>
    </>
    )
}