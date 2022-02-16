import { useState, useEffect } from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import { useCompanyAuthContext } from "../../../contexts/AuthCompanyContext";
import {useAuthContext} from '../../../contexts/AuthContext';
import * as jobService from '../../../services/JobService';
import * as candidateService from '../../../services/CandidateService';

import './JobDetails.css';

export default function JobDetails() {
    const history = useHistory();
    let {jobId} = useParams()
    const {company} = useCompanyAuthContext();
    const {user} = useAuthContext();
    const [job, setJob] = useState({});
    let actions = '';

    useEffect(() => {
        jobService.getOne(jobId)
            .then(result => {
                setJob(result)
            })
    }, [jobId])

    const deleteHandler = (e) => {
        e.preventDefault();

        jobService.del(jobId, company.accessToken)
            .then(() => {
                history.push('/jobs')
            })
    }

    const onApplyBtn = (e) => {
        e.preventDefault();

        let name = user.name;
        let email = user.email;

        let candidate = {
            name,
            email,
            jobId
        }

        candidateService.create(candidate).then(() => {
            //add toast if already applied and upon success
            history.push('/jobs')
        })
    }

    const companyButtons = (
        <div className="actions">
            <Link className="jobDetailsButton" to={`/jobs/edit/${job._id}`}>Edit</Link>
            <Link className="jobDetailsButton" to='#' onClick={deleteHandler}>Delete</Link>
                
            <Link className="jobDetailsButton" to={`/jobs/${job._id}/interviews`}>Interviews</Link>
            <Link className="jobDetailsButton" to={`/jobs/${job._id}/addInterview`}>Add New Candidate</Link>
        </div>
    )

    const guestButton = (<Link className="loginBtn guestBtn" to="/login">Login to Apply</Link>)

    const userButton = (<Link className="loginBtn guestBtn" onClick={onApplyBtn} to="#">Apply</Link>)

    if (job.companyId == company._id){
        actions = companyButtons
    } else if (company.email != ''){
        actions = ''
    } else if (user.email != ''){
        actions = userButton
    } else {
        actions = guestButton
    }

    return (
        <section className="jobDetails">
        <div className="jobDetailsInformation">
            <h3>Title:</h3>
            <h1>{job.title}</h1>
            <div className="jobDescription">
                <h3>Company:</h3>
                <p>{job.companyName}</p>
            </div>
            <div className="jobDescription">
                <h3>Location:</h3>
                <p>{job.location}</p>
            </div>
            <div className="jobDescription">
                <h3>Description:</h3>
                <p>{job.description}</p>
            </div>

            {actions}

        </div>
       
      </section>
    )
}