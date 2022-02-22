import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as interviewService from '../../../services/InterviewService'

export default function Interview(){
    let {jobId} = useParams();
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        interviewService.getByJobId(jobId)
            .then(result => {
                setInterviews(result)
            })
    }, [jobId])

    return (
        <section className="interviewsList">
            <article className="loginPageTitle">
                <h1>Upcoming Interviews:</h1>
            </article>
    <ul>
        {interviews.length > 0 
        ? interviews.map(i => 
            <li key={i._id}>{i.candidateId.name} - {i.jobId.title}</li>)
        :   <h4>There are no interviews yet.</h4>
        }
    </ul>
    </section>
    )
}