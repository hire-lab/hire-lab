import { useState, useEffect } from "react";
import * as candidateService from '../../services/CandidateService'

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
        <section className="candidate-profile">
            <div className="candidate-profile-information">
                <h3>Name: {candidate.name}</h3>
                <p className="candidate-profile-email">Email: {candidate.email}</p>
                <div className="candidate-actions">
                    <a className="book-button" href="#">Book an interview</a>                    
                </div>
            </div>
        </section>
    )
}