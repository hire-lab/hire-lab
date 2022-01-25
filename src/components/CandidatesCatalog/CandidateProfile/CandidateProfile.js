import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { isAuth } from "../../../hoc/isAuth";
import * as jobService from '../../../services/JobService';
import * as candidateService from '../../../services/CandidateService';
import * as interviewService from '../../../services/InterviewService';
import './CandidateProfile.css'

const CandidateProfile = ({
    match
}) =>  {
    const [candidate, setCandidate] = useState({});
    const [jobs, setJobs] = useState([]);
    let [jobId, setSelectedJob] = useState([])
    const history = useHistory()
    const candidateId = match.params.candidateId;

    useEffect(() => {
        candidateService.getOne(candidateId)
        .then(result => {
            setCandidate(result)
        })
    }, [candidateId])

    useEffect(() => {
        jobService.getAll()
            .then(result => {
                setJobs(result)
            })
    }, [])

    const onSelectJob = (e) => {
        jobId = e.target.value;
        setSelectedJob(jobId)
    }

    const onBookBtnClick = () => {
        const interviewData = {
            jobId,
            candidateId
        }
        interviewService.bookInterview(interviewData)
            .then(result => {
                history.push('/interviews')
                return () => {
                    setCandidate({})
                }
            })
 
    }

    return (
        <section className="candidateProfile">
            <div className="candidate-profile-information">
                <h3>Name: {candidate.name}</h3>
                <p className="candidateProfileEmail">Email: {candidate.email}</p>
                <p className="field">
                    <label htmlFor="availableJobs">Available Jobs</label>
                    <span className="input">
                        <select id="availableJobs" name="availableJobs" onChange={onSelectJob} >
                            <option disabled={true}>Please select:</option>

                            {jobs.map(j => 
                                <option key={j._id} value={j._id}>{j.title}</option>
                            )}
    
                        </select>
                    </span>
                </p>
                <div className="candidateActions">
                    <Link className="bookButton" to={`/candidates/${candidateId}/interviews`} onClick={onBookBtnClick}>Book an interview</Link>                    
                </div>
            </div>
        </section>
    )
}

export default isAuth(CandidateProfile);