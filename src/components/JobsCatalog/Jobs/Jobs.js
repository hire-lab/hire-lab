import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useCompanyAuthContext} from '../../../contexts/AuthCompanyContext';
import JobListing from '../JobListing/JobListing'
import * as JobService from '../../../services/JobService';
import './Jobs.css'

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const {company} = useCompanyAuthContext();

    useEffect(() => {
        JobService.getAll()
            .then(result => {
                setJobs(result)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const addJobButton = (
        <div className='addJobButtonWrapper'>
            <Link className='addJobButton' to='/jobs/create'> Add new job listing </Link>
        </div>
    )

    return (
        <section className="jobsPage">
            <div className="jobsPageTitle">
                <h1><span className="coloredText"> Job</span> Listings</h1> 
                <span className="aboutPageTitleUnderline"></span>

                    {company.email
                        ? addJobButton
                        : null
                    }
            </div>         
            <div className="jobListings">

                {jobs.length > 0
                    ? jobs.map(j => <JobListing key={j._id} job={j} />)
                    : <h3>Loading...</h3>
                }

            </div>
        </section>
    )
}