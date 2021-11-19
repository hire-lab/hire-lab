import { useEffect, useState } from "react";
import CandidateCard from "./CandidateCard";
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
        <div className="team" id="candidates">
             <div className="container">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="section-title text-center">
                        <h1> <span className="alo"></span> Candidates</h1> 
                        <span className="border-line"></span>
                        <p className="lead subtitle-caption">
                        You are here because people are important to you!
                        </p>
                    </div>
                </div>
              </div>
            <div className="row">
                {candidates.length > 0
                    ? candidates.map(c => <CandidateCard key={c._id} candidate={c} />)
                    : <h3>There are no candidates at the moment.</h3>
                }
            </div>
            </div>
        </div>
    )
}