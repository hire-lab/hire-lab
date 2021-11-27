import {useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as JobService from '../../services/JobService';

export default function EditJobListing({
    match
}) {
    const [job, setJob] = useState();

    useEffect(() => {
        JobService.getOne(match.params.jobId)
            .then(result => {
                setJob(result)
            })
    }, [])
    /*const history = useHistory();
    
    const editJobHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');

        JobService.edit(job._id, {
            title,
            description
        }).then(result => {
            history.push('/jobs')
        })
    }*/
    return (
        <section className="create-job-page">
            <article>
                <h1>Edit job listing</h1>
            </article>
            <form method="PUT">               
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="title">Title</label>
                            <input className="form-control" type="text" name="title" id="title" placeholder="Title" defaultValue={job.title}/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="description">Description</label>
                            <input className="form-control" id="description" type="text" name="description" placeholder="Description" defaultValue={job.description}/>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Edit Job Listing" />
                    </div>
                </div>
            </form>
    </section>
    )
}