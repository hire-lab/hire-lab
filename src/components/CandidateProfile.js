export default function CandidateProfile({image, name, position}) {
    return (
        <div className="col-sm-4 margin-bottom30">
          <div className="team-box">
            <img src={image} className="img-responsive" alt="" />

            <ul className="social list-inline">
                <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
            </ul>
          </div>
          <div className="team-desc">
            <h4>{name}</h4>
            <em>{position}</em>
          </div>
        </div>
    )
}