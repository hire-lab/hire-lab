import { useState, useEffect } from "react";
import * as interviewService from '../../services/InterviewService'

export default function Interview(){
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        interviewService.getByJobId()
            .then(result => {
                setInterviews(result)
            })
    }, [])

    return (
        <h1>We reached here!</h1>
    )
}