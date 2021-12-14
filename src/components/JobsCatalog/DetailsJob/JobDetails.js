import { useState, useEffect} from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import * as JobService from '../../../services/JobService';
import { useAuthContext } from "../../../contexts/AuthContext";
import './JobDetails.css'

export default function JobDetails() {
    const history = useHistory();
    const [job, setJob] = useState({})
    let {jobId} = useParams()
    const {user} = useAuthContext()

    useEffect(() => {
        JobService.getOne(jobId)
            .then(result => {
                setJob(result)
            })
    }, [jobId])


    return (
        <section className="jobDetails">
        <div className="jobDetailsInformation">
            <h3>Title:</h3>
            <h1>{job.title}</h1>
            <div className="jobDescription">
                <h3>Description:</h3>
                <p>{job.description}</p>
            </div>
            <div className="actions">
                <Link className="jobDetailsButton" to={`/jobs/${job._id}/edit`}>Edit</Link>
                <Link className="jobDetailsButton" to='#'>Delete</Link>
                
                <Link className="jobDetailsButton" to="/">Interviews</Link>
                <Link className="jobDetailsButton" to="/">Candidates</Link>
            </div>
        </div>
       
      </section>
    )
}