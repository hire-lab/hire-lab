export default function CandidateProfile({candidate}) {
    return (
        <>
        <div className="col-sm-4 margin-bottom30">
          <div className="team-box">
            <img src={candidate.image} className="img-responsive" alt="" />

            <ul className="social list-inline">
                <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
            </ul>
          </div>
          <div className="team-desc">
            <h4>{candidate.name}</h4>
            <em>{candidate.position}</em>
          </div>
        </div>
        </>
    )
}