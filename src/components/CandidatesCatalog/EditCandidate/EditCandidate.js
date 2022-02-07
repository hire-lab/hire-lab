import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as candidateService from '../../../services/CandidateService';

export default function Edit(){
    const history = useHistory()
    const {candidateId} = useParams()
    const [candidate, setCandidate] = useState({})

    useEffect(() => {
        candidateService.getOne(candidateId)
            .then(result => {
                setCandidate(result)
            })
    }, [candidateId])

    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        let candidateData = Object.fromEntries(new FormData(e.currentTarget))
        candidateService.update(candidateId, candidateData)
            .then(res => {
                setCandidate(res)
                history.push(`/candidates/${candidateId}`)
            })

    }

    return (
        <section className="addCandidatePage">
        <article>
            <h1>Edit candidate details</h1>
        </article>
        <form method="POST" onSubmit={onEditSubmitHandler}>               
            <div className="row space-top">
                <div className="col-md-4">
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" id="name" defaultValue={candidate.name} />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="email">Email</label>
                        <input className="form-control" id="email" type="email" name="email" defaultValue={candidate.email} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Edit Candidate" />
                </div>
            </div>
        </form>
        </section>
    )
}
