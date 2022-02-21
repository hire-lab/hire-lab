import {useHistory} from 'react-router-dom';
import { isAuth } from '../../../hoc/isAuth';
import * as JobService from '../../../services/JobService';
import {useCompanyAuthContext} from '../../../contexts/AuthCompanyContext';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import './CreateJobListing.css'

const CreateJobListing = () => {
    const history = useHistory();
    const {company} = useCompanyAuthContext();
    const {addNotification} = useNotificationContext()

    const createJobHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let companyName = formData.get('companyName');
        let description = formData.get('description');
        let location = formData.get('location');
        let companyId = company._id;

        JobService.create({
            title,
            companyName,
            description,
            location,
            companyId
        }, company.accessToken)
            .then(result => {
                if(result.message) {
                    addNotification(result.message, types.error)
                } else {
                    addNotification('Job added successfully', types.success)
                    history.push(`/jobs/${companyId}/jobs`)
                }
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
                    <label className="loginFormFieldLabel" htmlFor="companyName">Company</label>
                    <input className="loginFormFieldInput" type="text" name="companyName" id="companyName" placeholder="Company" />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="description">Description</label>
                    <input className="loginFormFieldInput" id="description" type="text" name="description" placeholder="Description" />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="location">Location</label>
                    <input className="loginFormFieldInput" id="location" type="text" name="location" placeholder="Location" />
                </div>
                <input className="loginBtn addJobBtn" type="submit" value="Add Job Listing" />
            </form>
        </section>
    )
}

export default isAuth(CreateJobListing)