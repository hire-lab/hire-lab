import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { isAuth } from "../../../hoc/isAuth";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useCompanyAuthContext } from "../../../contexts/AuthCompanyContext";
import * as candidateService from '../../../services/CandidateService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import ConfirmDialog from "../../Common/ConfirmDialog/ConfirmDialog";

import './CandidateProfile.css'

const CandidateProfile = ({
    match
}) =>  {
    const [candidate, setCandidate] = useState({});
    const candidateId = match.params.candidateId;
    const history = useHistory()
    const {user} = useAuthContext()
    const {company} = useCompanyAuthContext()
    const [showDeleteDialog, setDeleteDialog] = useState(false);
    const {addNotification} = useNotificationContext()

    useEffect(() => {
        candidateService.getOne(company._id, candidateId)
        .then(result => {
            setCandidate(result)
        })
    }, [company._id, candidateId])

    const deleteHandler = (e) => {
        e.preventDefault()

        candidateService.del(candidateId, user.accessToken)
            .then(() => {
                addNotification('Candidate removed', types.info)
                history.push(`/candidates/${company._id}/candidates`)
            })
            .finally(() => {
                setDeleteDialog(false)
            })
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setDeleteDialog(true)
    }

    return (
        <>
        <ConfirmDialog show={showDeleteDialog} onCancel={() => setDeleteDialog(false)} onConfirm={deleteHandler}/>
        <section className="jobDetails">
            <div className="jobDetailsInformation">
                <h3>Name:</h3>
                <h1>{candidate.name}</h1>
                <div className="jobDescription">
                    <h3>Email:</h3>
                    <p>{candidate.email}</p>
                    <h3>CV:</h3>
                    <a className="cvLink" href={`http://${candidate.cv}`} target="_blank">{candidate.cv}</a>

                    {candidate.jobs
                        ?  <>
                                <h3>Applied for:</h3>
                                <p>{candidate.jobs}</p>
                            </>
                        : null
                    }
                
                </div>

                {candidate.jobs
                    ?  <div className="actions">
                            <Link className="jobDetailsButton editJob approveBtn" to={`/candidates/${candidateId}/addInterview`}><i className="fas fa-check"></i> Approve</Link>
                            <Link className="jobDetailsButton editJob rejectBtn" to='#' onClick={deleteClickHandler}><i className="fas fa-times"></i> Reject</Link>
                        </div>
                    : null
                }

            </div>
        </section>
        </>
    )
}

export default isAuth(CandidateProfile);