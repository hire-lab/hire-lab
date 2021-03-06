import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { isAuth } from "../../../hoc/isAuth";
import CandidateListing from '../CandidateListing/CandidateListing'
import * as CandidateService from '../../../services/CandidateService';
import Loader from "../../Common/Loader/Loader";
import './Candidates.css'

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    let {companyId} = useParams()

    useEffect(() => {
        CandidateService.getAll(companyId)
            .then(result => {
                setLoading(false)
                setCandidates(result)
            })
    }, [])

    return (
        <section className="jobsPage">
            <div className="jobsPageTitle">
                <h1>Candidates</h1> 
                <span className="aboutPageTitleUnderline"></span>
                <div className='addJobButtonWrapper'>
                    <Link className='addJobButton' to='/candidates/create'> Add new candidate </Link>
                </div>
            </div>

            {loading 
                ? <Loader />
                : null
            }

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

export default isAuth(Candidates)
