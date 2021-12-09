import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../../hoc/isAuth";
import * as CandidateService from '../../../services/CandidateService';
import './Candidates.css'

const Candidates = () => {
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
                        <div className='addJobButtonWrapper'>
                            <Link className='addJobButton' to='/candidates/create'> Add new candidate </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobListings">
                <ul>
                {candidates.length > 0
                    ? candidates.map(c => 
                        <li className="candidateDetails" key={c._id}> <Link className="candidateDetailsLink" to={`/candidates/${c._id}`}><h4>{c.name}</h4></Link></li>)
                    : <h3>There are no candidates at the moment.</h3>
                }
                </ul>
            </div>
        </div>
    </section>
    )
}

const AuthCandidates = isAuth(Candidates)

export default AuthCandidates;