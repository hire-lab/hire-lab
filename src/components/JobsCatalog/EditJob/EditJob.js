import { useParams, useHistory } from "react-router-dom";
import useJobState from "../../../hooks/useJobState";
import * as jobService from '../../../services/JobService';

export default function Edit() {
    const history = useHistory();
    const {jobId} = useParams()
    const [job, setJob] = useJobState(jobId);

    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        let jobData = Object.fromEntries(new FormData(e.currentTarget))
        jobService.update(job._id, jobData);

        history.push('/jobs')
    }

    return (
        <section className="createJobPage">
        <article>
            <h1>Edit job listing</h1>
        </article>
        <form method="POST" onSubmit={onEditSubmitHandler}>               
            <div className="row space-top">
                <div className="col-md-4">
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="title">Title</label>
                        <input className="form-control" type="text" name="title" id="title" defaultValue={job.title} />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="description">Description</label>
                        <input className="form-control" id="description" type="text" name="description" defaultValue={job.description} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Save Job Listing" />
                </div>
            </div>
        </form>
    </section>
    )
}