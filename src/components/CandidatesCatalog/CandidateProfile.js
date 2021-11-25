import { useState, useEffect } from "react";
import * as CandidateService from '../../services/CandidateService'

export default function CandidateProfile({
    match
}) {
    const [candidate, setCandidate] = useState({});
    useEffect(() => {
        let result = CandidateService.getOne(match.params.candidateId)
        setCandidate(result)
    }, [])
    return (
        <section className="candidate-profile">
            <div className="candidate-profile-information">
                <h3>Name: {candidate.name}</h3>
                <p className="candidate-profile-email">Email: {candidate.email}</p>
                <div className="candidate-actions">
                    <a className="button" href="#">Book an interview</a>                    
                </div>
            </div>
        </section>
    )
}