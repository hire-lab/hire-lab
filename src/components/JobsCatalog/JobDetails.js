import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as JobService from '../../services/JobService'

export default function JobDetails({
    match
}) {
    const [job, setJob] = useState({})

    useEffect(() => {
        JobService.getOne(match.params.jobId)
            .then(result => {
                setJob(result)
            })
    }, [])

    return (
        <section className="job-details">
        <div className="job-details-information">
            <h3>Title:</h3>
            <p>{job.title}</p>
            <div className="job-description">
                <h3>Description:</h3>
                <p>{job.description}</p>
            </div>
            <div className="actions">
                <Link className="job-details-button" to={`/jobs/${job._id}/edit`}>Edit</Link>
                <Link className="job-details-button" to="/">Delete</Link>
                
                <Link className="job-details-button" to="/">Interviews</Link>
                <Link className="job-details-button" to="/">Candidates</Link>
            </div>
        </div>
       
    </section>
    )
}