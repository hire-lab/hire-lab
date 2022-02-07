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
        <section className="candidateProfile">
            <div className="candidate-profile-information">
                <h3>Name: {candidate.name}</h3>
                <p className="candidateProfileEmail">Email: {candidate.email}</p>
                <Link className="bookButton editJob" to={`/candidates/edit/${candidateId}`}>Edit</Link>
                <Link className="bookButton editJob" to='#' onClick={deleteHandler}>Delete</Link>
                <Link className="bookButton editJob" to={`/candidates/${candidateId}/interviews`}>Upcoming Interview</Link>
                <Link className="bookButton editJob" to={`/jobs`}>Available Jobs</Link>
            </div>
        </section>
    )
}

export default isAuth(CandidateProfile);