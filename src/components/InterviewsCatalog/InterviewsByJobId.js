import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as interviewService from '../../services/InterviewService'

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
        <h3>Upcoming Interviews:</h3>
    <ul>
        {interviews.length > 0 
        ? interviews.map(i => 
            <li key={i.potentialCandidates}>{i.candidateName} - {i.jobTitle}</li>)
        :   <h4>There are no interviews yet.</h4>
        }
    </ul>
    </section>
    )
}