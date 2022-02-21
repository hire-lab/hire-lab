import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {useCompanyAuthContext} from '../../../contexts/AuthCompanyContext';
import JobListing from '../JobListing/JobListing'
import * as JobService from '../../../services/JobService';
import Loader from "../../Common/Loader/Loader";
import './Jobs.css'

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef();
    const {company} = useCompanyAuthContext();

    useEffect(() => {
        JobService.getAll()
            .then(result => {
                setLoading(false)
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
        let location = formData.get('jobSearchByLocation')
        ref.current.value = ' ';

        JobService.getAllBySearch(keyword, location)
            .then(result => {
                setJobs(result)
            }).catch(err => {
                console.log(err)
            })
    }

    const searchBar = (
        <section className="loginPage searchFormWrapper">
        <form className='jobSearchForm' onSubmit={onSearch}>
            <label htmlFor='jobSearch' className="searchLabel">
                <span >Title: </span>
            </label>
            <input
                type='text'
                className="searchInput"
                id='jobSearch'
                placeholder='React Developer'
                name='jobSearch'
                ref={ref}
            />
            <label htmlFor='jobSearchByLocation' className="searchLabel">
                <span className=''>  Location:  </span>
            </label>
            <input
                type='text'
                className="searchInput"
                id='jobSearchByLocation'
                placeholder='London, UK'
                name='jobSearchByLocation'
                ref={ref}
            />
            <button type='submit' className='searchButton'>Search</button>
        </form>
        </section>
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

            {loading 
                ? <Loader />
                : null}

            <div className="jobListings">

                {jobs.length > 0
                    ? jobs.map(j => <JobListing key={j._id} job={j} />)
                    : <h3>There are no jobs yet.</h3>
                }

            </div>
        </section>
    )
}
