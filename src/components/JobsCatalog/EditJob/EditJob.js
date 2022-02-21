import { useParams, useHistory } from "react-router-dom";
import useJobState from "../../../hooks/useJobState";
import * as jobService from '../../../services/JobService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";

export default function EditJob() {
    const history = useHistory();
    const {jobId} = useParams()
    const [job, setJob] = useJobState(jobId);
    const {addNotification} = useNotificationContext()

    const onEditSubmitHandler = (e) => {
        e.preventDefault();
    
        let jobData = Object.fromEntries(new FormData(e.currentTarget))
        jobService.update(job._id, jobData)
            .then(res => {
                setJob(res)
                addNotification('Job updated', types.success)
                history.push(`/jobs/${jobId}`)
            })
        
    }

    return (
        <section className="createJobPage">
            <article className="loginPageTitle">
                <h1>Edit job listing</h1>
            </article>
            <form className="loginForm" method="POST" onSubmit={onEditSubmitHandler}>               
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="title">Title</label>
                    <input className="loginFormFieldInput" type="text" name="title" id="title" defaultValue={job.title} />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="description">Description</label>
                    <input className="loginFormFieldInput" id="description" type="text" name="description" defaultValue={job.description} />
                </div>
                <input className="loginBtn addJobBtn" type="submit" value="Save Job Listing" />
            </form>
        </section>
    )
}