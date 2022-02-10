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
            <article className="loginPageTitle">
                <h1>Add new job listing</h1>
            </article>
            <form className="loginForm" method="POST" onSubmit={createJobHandler}>               
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="title">Title</label>
                    <input className="loginFormFieldInput" type="text" name="title" id="title" placeholder="Title" />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="description">Description</label>
                    <input className="loginFormFieldInput" id="description" type="text" name="description" placeholder="Description" />
                </div>
                <input className="loginBtn addJobBtn" type="submit" value="Add Job Listing" />
            </form>
        </section>
    )
}