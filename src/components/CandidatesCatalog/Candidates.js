import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import * as CandidateService from '../../services/CandidateService'

export default function Candidates() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        CandidateService.getAll()
            .then(result => {
                setCandidates(result)
            })
    }, [])

    return (
        <section id="services" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                    <div className="section-title">
                        <h1><span className="colored-text"> Candidates</span></h1> 
                        <span className="border-line"></span>
                        <div className='addJobButton-wrapper'>
                            <Link className='addJobButton' to='/jobs/create'> Add new candidate </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="job-listings">
                <ul>
                {candidates.length > 0
                    ? candidates.map(c => 
                        <li className="candidate-details" key={c._id}> <Link className="candidate-details-link" to={`/candidates/${c._id}`}><h4>{c.name}</h4></Link></li>)
                    : <h3>There are no candidates at the moment.</h3>
                }
                </ul>
            </div>
        </div>
    </section>
    )
}