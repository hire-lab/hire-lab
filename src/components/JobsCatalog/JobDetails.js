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
            <h3>Title: {job.title}</h3>
            <div className="actions">
                <Link className="job-details-button" to="/">Edit</Link>
                <Link className="job-details-button" href="/">Delete</Link>
                
                <Link className="job-details-button" href="/">Interviews</Link>
                <Link className="job-details-button" href="/">Candidates</Link>
            </div>
        </div>
        <div className="job-description">
            <h4>Description:</h4>
            <p>{job.description}</p>
        </div>
    </section>
    )
}