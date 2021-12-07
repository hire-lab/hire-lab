import { useState, useEffect, useContext } from "react";
import { Link, useParams} from "react-router-dom";
import * as JobService from '../../../services/JobService';
import { AuthContext } from "../../../contexts/AuthContext";
import './JobDetails.css'

export default function JobDetails() {
    const {user} = useContext(AuthContext)
    const [job, setJob] = useState({})
    let {jobId} = useParams()

    useEffect(() => {
        JobService.getOne(jobId)
            .then(result => {
                setJob(result)
            })
    }, [jobId])

    return (
        <section className="jobDetails">
        <div className="job-details-information">
            <h3>Title:</h3>
            <p>{job.title}</p>
            <div className="job-description">
                <h3>Description:</h3>
                <p>{job.description}</p>
            </div>
            <div className="actions">
                <Link className="jobDetailsButton" to={`/jobs/${job._id}/edit`}>Edit</Link>
                <Link className="jobDetailsButton" to="/">Delete</Link>
                
                <Link className="jobDetailsButton" to="/">Interviews</Link>
                <Link className="jobDetailsButton" to="/">Candidates</Link>
            </div>
        </div>
       
    </section>
    )
}