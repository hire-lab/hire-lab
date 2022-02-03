import { useState, useEffect } from "react";
import * as interviewService from '../../../services/InterviewService';
import './Interviews.css'

export default function Interview(){
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        interviewService.getAll()
            .then(result => {
                setInterviews(result)
            })
    }, [])

    return (
        <section className="interviewsList">
            <h3>Upcoming Interviews:</h3>
        <ul>
            {interviews.map(i => <li key={i.job}>{i.jobTitle} - {i.candidateName}</li>)}
        </ul>
        </section>
    )
}


/*import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import moment from "moment";

export default function Interview() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        <section className="interview-calendar">
            <h1 className="interview-calendar-title">Interview List</h1>
            <Calendar 
                 value={dateState}
                 onChange={changeDate}
            />
            <p className="interview-calendar-info">Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
        </section>
    )
}
*/
