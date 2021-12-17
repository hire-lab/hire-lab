import {useHistory} from 'react-router-dom'
import * as JobService from '../../../services/JobService';
import {useAuthContext} from '../../../contexts/AuthContext'
import './CreateJobListing.css'

export default function CreateJobListing() {
    const history = useHistory();
    const {user} = useAuthContext();

    const createJobHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');

        JobService.create({
            title,
            description
        }, user.accessToken)
            .then(result => {
                history.push('/jobs')
        })
    }
    return (
        <section className="createJobPage">
            <article>
                <h1>Add new job listing</h1>
            </article>
            <form method="POST" onSubmit={createJobHandler}>               
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="title">Title</label>
                            <input className="form-control" type="text" name="title" id="title" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="description">Description</label>
                            <input className="form-control" id="description" type="text" name="description" placeholder="Description" />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Add Job Listing" />
                    </div>
                </div>
            </form>
        </section>
    )
}