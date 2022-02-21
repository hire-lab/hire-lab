import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuth } from "../../../hoc/isAuth";
import { useCompanyAuthContext } from '../../../contexts/AuthCompanyContext';
import * as CandidateService from '../../../services/CandidateService';
import * as jobService from '../../../services/JobService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import './AddCandidate.css'


const AddCandidate = () => {
    const history = useHistory()
    const {company} = useCompanyAuthContext()
    let [jobId, setSelectedJob] = useState([])
    const [jobs, setJobs] = useState([])
    const {addNotification} = useNotificationContext()

    useEffect(() => {
        jobService.getByCompanyId(company._id)
            .then(result => {
                setJobs(result)
            })
    }, [company._id])

    const onJobSelect = (e) => {
        jobId = e.target.value;
        setSelectedJob(jobId)

    }
    
    const addCandidateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let email = formData.get('email');
        let cv = formData.get('cv');
        let companyId = company._id;
        let userId = '';

        CandidateService.create({
            name,
            email,
            cv,
            companyId,
            userId,
            jobId
        }).then(result => {
            if(result.message) {
                addNotification(result.message, types.error)
            } else {
                addNotification('Candidate added successfully', types.success)
                history.push(`/candidates/${company._id}/candidates`)
            }
        })
    }


    return (
        <section className="addCandidatePage">
            <article className="loginPageTitle">
                <h1>Add new candidate</h1>
            </article>
            <form className="loginForm" method="POST" onSubmit={addCandidateHandler}>               
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="name">Name</label>
                    <input className="loginFormFieldInput" type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="email">Email</label>
                    <input className="loginFormFieldInput" id="email" type="email" name="email" placeholder="Email" />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="cv">CV URL</label>
                    <input className="loginFormFieldInput" id="cv" type="text" name="cv" placeholder="https://maria-ivanova-cv.com"/>
                </div>
                <span className="input">
                <select className="selectJob" id="availableJobs" name="availableJobs" onChange={onJobSelect} >
                    <option selected disabled>Available Jobs:</option>
                        {jobs.map(j => 
                            <option key={j._id} value={j._id}>{j.title}</option>
                        )}
                </select>
            </span>
                <input className="loginBtn addJobBtn" type="submit" value="Add Candidate" />
            </form>
        </section>
    )
}

export default isAuth(AddCandidate)
