import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobListing from "../JobListing/JobListing";
import * as JobService from '../../../services/JobService';
import './Jobs.css'

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        JobService.getAll()
            .then(result => {
                setJobs(result)
            })
    }, [])

    return (
        <section id="services" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                    <div className="section-title">
                        <h1><span className="colored-text"> Job</span> Listings</h1> 
                        <span className="border-line"></span>
                        <div className='addJobButtonWrapper'>
                            <Link className='addJobButton' to='/jobs/create'> Add new job listing </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobListings">
                {jobs.length > 0
                    ? jobs.map(j => <JobListing key={j._id} job={j} />)
                    : <h3>No job listings yet</h3>
                }
            </div>
        </div>
    </section>
    )
}