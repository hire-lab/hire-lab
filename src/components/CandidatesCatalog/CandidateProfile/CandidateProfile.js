import { useState, useEffect } from "react";
import * as candidateService from '../../../services/CandidateService';
import './CandidateProfile.css'

export default function CandidateProfile({
    match
}) {
    const [candidate, setCandidate] = useState({});
    useEffect(() => {
        candidateService.getOne(match.params.candidateId)
        .then(result => {
            setCandidate(result)
        })
    }, [])
    return (
        <section className="candidateProfile">
            <div className="candidate-profile-information">
                <h3>Name: {candidate.name}</h3>
                <p className="candidateProfileEmail">Email: {candidate.email}</p>
                <div className="candidate-actions">
                    <a className="bookButton" href="#">Book an interview</a>                    
                </div>
            </div>
        </section>
    )
}