import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../../hoc/isAuth";
import * as candidateService from '../../../services/CandidateService';

import './CandidateProfile.css'

const CandidateProfile = ({
    match
}) =>  {
    const [candidate, setCandidate] = useState({});
    const candidateId = match.params.candidateId;

    useEffect(() => {
        candidateService.getOne(candidateId)
        .then(result => {
            setCandidate(result)
        })
    }, [candidateId])

    return (
        <section className="candidateProfile">
            <div className="candidate-profile-information">
                <h3>Name: {candidate.name}</h3>
                <p className="candidateProfileEmail">Email: {candidate.email}</p>
                <Link className="bookButton" to={`/candidates/${candidate._id}/interviews`}>Upcoming Interview</Link>
                <Link className="jobDetailsButton" to={`/jobs`}>Available Jobs</Link>
            </div>
        </section>
    )
}

export default isAuth(CandidateProfile);