import { Link } from "react-router-dom"

export default function CandidateCard({
  candidate
}) 
{
    return (
        <div className="col-sm-4 margin-bottom30">
          <div className="team-box">
            <ul className="social list-inline">
                <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
                <Link className="candidate-details" to={`/candidates/${candidate._id}`}>PROFILE </Link>
            </ul>
          </div>
          <div className="team-desc">
            <h4>{candidate.name}</h4>
            <em>{candidate.email}</em>
          </div>
        </div>
    )
}