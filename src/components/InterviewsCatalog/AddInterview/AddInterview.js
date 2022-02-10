import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as candidateService from '../../../services/CandidateService';
import * as interviewService from '../../../services/InterviewService';
import * as jobService from '../../../services/JobService';
import './AddInterview.css'

export default function AddInterview() {
    let {jobId} = useParams();
    const [job, setJob] = useState({});
    const [candidates, setCandidates] = useState([]);
    let [candidateId, setSelectedCandidate] = useState([]);
    let [candidateName, setCandidateName] = useState([])
    let [jobTitle, setJobTitle] = useState([])
    const history = useHistory();
    

    useEffect(() => {
        jobService.getOne(jobId)
            .then(result => {
                jobTitle = result.title
                setJob(result)
                setJobTitle(jobTitle)
            })
    }, [jobId])

    useEffect(() => {
        candidateService.getAll()
            .then(result => {
                setCandidates(result)
            })
    }, [])

    const onCandidateSelect = (e) => {
        candidateId = e.target.value;
        setSelectedCandidate(candidateId)
    }

    useEffect(() => {
        candidateService.getOne(candidateId)
            .then(result => {
                candidateName = result.name;
                setCandidateName(candidateName)
            })
    }, [candidateId])

    const onBookBtnClick = (e) => {

        const interviewData = {
            jobId,
            candidateId,
            jobTitle,
            candidateName
        }

        interviewService.bookInterview(interviewData)
            .then(result => {
                history.push('/interviews')
            })
 
    }


    return (
        <section className="jobDetails">
        <div className="jobDetailsInformation">
            <h3>Title:</h3>
            <h1>{job.title}</h1>
            <div className="jobDescription">
                <h3>Description:</h3>
                <p>{job.description}</p>
            </div>
        </div>
        <div className="actions">
            <span className="input">
                <select className="selectCandidate" id="availableJobs" name="availableJobs" onChange={onCandidateSelect} >
                    <option selected disabled>Candidates:</option>
                        {candidates.map(j => 
                            <option key={j._id} value={j._id}>{j.name}</option>
                        )}
                </select>
            </span>
            <div>
                <button onClick={onBookBtnClick} className="jobDetailsButton">Book an interview</button>                    
            </div>
        </div>
       
      </section>
    )
}