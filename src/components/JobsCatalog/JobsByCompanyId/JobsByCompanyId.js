import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import * as jobService from '../../../services/JobService';
import {useCompanyAuthContext} from '../../../contexts/AuthCompanyContext';
import JobListing from '../JobListing/JobListing';
import Loader from "../../Common/Loader/Loader";

export default function JobsByCompanyId(){
    let {companyId} = useParams()
    const [jobs, setJobs] = useState([])
    const {company} = useCompanyAuthContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        jobService.getByCompanyId(companyId)
            .then(result => {
                setLoading(false)
                setJobs(result)
            })
    }, [companyId])

    const addJobButton = (
        <div className='addJobButtonWrapper'>
            <Link className='addJobButton' to='/jobs/create'> Add new job listing </Link>
        </div>
    )

    return (
        <section className="jobsPage">
            <div className="jobsPageTitle">
                <h1><span className="coloredText"> {company.name} Job</span> Listings</h1> 
                <span className="aboutPageTitleUnderline"></span>

                    {company.email
                        ? addJobButton
                        : null
                    }
            </div> 

            {loading 
                ? <Loader />
                : null
            }

            <div className="jobListings">

                {jobs.length > 0
                    ? jobs.map(j => <JobListing key={j._id} job={j} />)
                    : <h3>There are no jobs at the moment.</h3>
                }

            </div>
        </section>
    )
}