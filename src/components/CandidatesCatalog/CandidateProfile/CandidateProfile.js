import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { isAuth } from "../../../hoc/isAuth";
import { useAuthContext } from "../../../contexts/AuthContext";
import * as candidateService from '../../../services/CandidateService';

import './CandidateProfile.css'

const CandidateProfile = ({
    match
}) =>  {
    const [candidate, setCandidate] = useState({});
    const candidateId = match.params.candidateId;
    const history = useHistory()
    const {user} = useAuthContext()

    useEffect(() => {
        candidateService.getOne(candidateId)
        .then(result => {
            setCandidate(result)
        })
    }, [candidateId])

    const deleteHandler = (e) => {
        e.preventDefault()

        candidateService.del(candidateId, user.accessToken)
            .then(() => {
                history.push('/candidates')
            })
    }

    return (
        <section className="jobDetails">
            <div className="jobDetailsInformation">
                <h3>Name:</h3>
                <h1>{candidate.name}</h1>
                <div className="jobDescription">
                    <h3>Email:</h3>
                    <p>{candidate.email}</p>
                </div>
                <div className="actions">
                    <Link className="jobDetailsButton editJob" to={`/candidates/edit/${candidateId}`}>Edit</Link>
                    <Link className="jobDetailsButton editJob" to='#' onClick={deleteHandler}>Delete</Link>
                    <Link className="jobDetailsButton editJob" to={`/jobs`}>Available Jobs</Link>
                </div>
            </div>
        </section>
    )
}

export default isAuth(CandidateProfile);