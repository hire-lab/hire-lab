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

    const onSearch = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        let keyword = formData.get('jobSearch')

        //add filter through keyword
    }

    const searchBar = (
        <form className='jobSearchForm' onSubmit={onSearch}>
            <label htmlFor='jobSearch'>
                <span className='hidden'>Search Jobs </span>
            </label>
            <input
                type='text'
                className="searchInput"
                id='jobSearch'
                placeholder='ex. React Developer'
                name='jobSearch'
            />
            <button type='submit' className='searchButton'>Search</button>
        </form>
    )

    return (
        <section className="jobsPage">
            <div className="jobsPageTitle">
                <h1><span className="coloredText"> Job</span> Listings</h1> 
                <span className="aboutPageTitleUnderline"></span>

                    {company.email
                        ? addJobButton
                        : searchBar 
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