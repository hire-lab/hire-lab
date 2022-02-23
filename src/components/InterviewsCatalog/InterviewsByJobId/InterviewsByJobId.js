import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import * as interviewService from '../../../services/InterviewService'

export default function Interview(){
    let {jobId} = useParams();
    let [interviews, setInterviews] = useState([]);
    let [date, setDate] = useState(new Date());

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

            <div className="calendarWrapper">
                    <Calendar onChange={setDate} value={date}/>
            </div>
        <ul>
            {interviews.length > 0 
                ? interviews.map(i => 
                <li key={i._id}>{i.date} {i.time} - {i.candidateId.name} - {i.jobId.title}</li>)
            :       <h4>There are no interviews yet.</h4>
            }
        </ul>
    </section>
    )
}