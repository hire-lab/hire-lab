import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as jobService from '../../../services/JobService';
import CandidateListing from '../CandidateListing/CandidateListing'

export default function CandidatesByJobId() {
    let {jobId} = useParams();
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        jobService.getCandidatesByJobId(jobId)
            .then(result => {
                setCandidates(result)
            })
        }, [jobId])

    return (
        <section className="jobsPage">
        <div className="jobsPageTitle">
            <h1>Candidates</h1> 
            <span className="aboutPageTitleUnderline"></span>
        </div>

        <div className="jobListings">
            {candidates.length > 0
                ? candidates.map(c => 
                    <CandidateListing key={c._id} candidate={c} />)
                : <h3>There are no candidates at the moment.</h3>
            }
        </div>
    </section>
    )
}