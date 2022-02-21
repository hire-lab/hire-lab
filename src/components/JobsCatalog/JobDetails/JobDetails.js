import { useState, useEffect } from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import { useCompanyAuthContext } from "../../../contexts/AuthCompanyContext";
import {useAuthContext} from '../../../contexts/AuthContext';
import * as jobService from '../../../services/JobService';
import * as candidateService from '../../../services/CandidateService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import ConfirmDialog from "../../Common/ConfirmDialog/ConfirmDialog";

import './JobDetails.css';

export default function JobDetails() {
    const history = useHistory();
    let {jobId} = useParams()
    const {company} = useCompanyAuthContext();
    const {user} = useAuthContext();
    const [job, setJob] = useState({});
    const {addNotification} = useNotificationContext();
    const [showDeleteDialog, setDeleteDialog] = useState(false);
    let actions = '';
    let companyId = job.companyId;

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
                addNotification('Job deleted', types.info)
                history.push('/jobs')
            })
            .finally(() => {
                setDeleteDialog(false)
            })
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setDeleteDialog(true)
    }

    const onApplyBtn = (e) => {
        let candidate = {
            name: user.name,
            email: user.email,
            cv: user.cv,
            jobId,
            companyId,
            userId: user._id
        }

        candidateService.create(candidate)
            .then((result) => {
                if (result.message){
                    addNotification(result.message, types.error)
                } else {
                    addNotification('Good Luck!', types.success)
                    history.push('/jobs')
                }
        })
    }

    const companyButtons = (
        <div className="actions">
            <Link className="jobDetailsButton" to={`/jobs/edit/${job._id}`}>Edit</Link>
            <Link className="jobDetailsButton deleteBtn" to='#' onClick={deleteClickHandler}>Delete</Link>
                
            <Link className="jobDetailsButton" to={`/jobs/${job._id}/interviews`}>Interviews</Link>
            <Link className="jobDetailsButton" to={`/jobs/${job._id}/candidates`}>Candidates</Link>
        </div>
    )

    const guestButton = (<Link className="loginBtn guestBtn" to="/login">Login to Apply</Link>)

    const userButton = (<Link className="jobDetailsButton editJob applyBtn" onClick={onApplyBtn} to="#">Apply</Link>)

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
        <>
        <ConfirmDialog show={showDeleteDialog} onCancel={() => setDeleteDialog(false)} onConfirm={deleteHandler}/>
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
      </>
    )
}