import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import * as interviewService from '../../../services/InterviewService';
import 'react-calendar/dist/Calendar.css';
import './Interviews.css';


export default function Interviews(){
    let [interviews, setInterviews] = useState([]);
    let [date, setDate] = useState(new Date());
    const { companyId } = useParams()

    useEffect(() => {
        interviewService.getAll(companyId, date)
            .then(result => {
                setInterviews(result)
            })
    }, [companyId, date])


    return (
        <section className="interviewsList">
             <article className="loginPageTitle">
                <h1>Upcoming Interviews:</h1>
            </article>

            <div className="calendarWrapper">
                <Calendar onClickDay={setDate} value={date}/>
            </div>
            <ul>

            {interviews.length > 0 
                ? interviews.map(i => 
                    <li key={i._id}>{i.date} {i.time} - {i.candidateId.name} - {i.jobId.title}</li>)
                :   <h4>There are no interviews yet.</h4>
            }
            
            </ul>
        </section>
    )
}


