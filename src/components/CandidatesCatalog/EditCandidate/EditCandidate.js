import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as candidateService from '../../../services/CandidateService';

export default function EditCandidate(){
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
        <section className="createJobPage">
            <article className="loginPageTitle">
                <h1>Edit candidate details</h1>
            </article>
            <form className="loginForm" method="POST" onSubmit={onEditSubmitHandler}>               
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="name">Name</label>
                    <input className="loginFormFieldInput" type="text" name="name" id="name" defaultValue={candidate.name} />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="email">Email</label>
                    <input className="loginFormFieldInput" id="email" type="email" name="email" defaultValue={candidate.email} />
                </div>
                <input className="loginBtn addJobBtn" type="submit" value="Edit Candidate" />
            </form>
        </section>
    )
}
