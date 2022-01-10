import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../../hoc/isAuth";
import * as jobService from '../../../services/JobService';
import * as candidateService from '../../../services/CandidateService';
import * as interviewService from '../../../services/InterviewSevice';
import './CandidateProfile.css'

const CandidateProfile = ({
    match
}) =>  {
    const [candidate, setCandidate] = useState({});
    const [jobs, setJobs] = useState([]);
    let [selectedJob, setSelectedJob] = useState([])

    useEffect(() => {
        candidateService.getOne(match.params.candidateId)
        .then(result => {
            setCandidate(result)
        })
    }, [])

    useEffect(() => {
        jobService.getAll()
            .then(result => {
                setJobs(result)
            })
    }, [])

    const onSelectJob = (e) => {
        selectedJob = e.target.value;
        setSelectedJob(selectedJob)
    }

    /*const onBookBtnClick = () => {
        interviewService.bookInterview(match.params.candidateId, selectedJob)
    }*/

    return (
        <section className="candidateProfile">
            <div className="candidate-profile-information">
                <h3>Name: {candidate.name}</h3>
                <p className="candidateProfileEmail">Email: {candidate.email}</p>
                <p className="field">
                    <label htmlFor="availableJobs">Available Jobs</label>
                    <span className="input">
                        <select id="availableJobs" name="availableJobs" onChange={onSelectJob}>

                            {jobs.map(j => 
                                <option key={j._id} value={j._id}>{j.title}</option>
                            )}
    
                        </select>
                    </span>
                </p>
                <div className="candidateActions">
                    <Link className="bookButton" to="#">Book an interview</Link>                    
                </div>
            </div>
        </section>
    )
}

export default isAuth(CandidateProfile);