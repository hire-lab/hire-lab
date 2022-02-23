import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import * as candidateService from '../../../services/CandidateService';
import * as interviewService from '../../../services/InterviewService';
import { useCompanyAuthContext } from "../../../contexts/AuthCompanyContext";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import './AddInterview.css'

export default function AddInterview() {
    const [candidate, setCandidate] = useState({});
    let [jobId, setSelectedJob] = useState([]);
    let [date, setDate] = useState(new Date());
    let [time, setSelectedTime] = useState(null);
    const {addNotification} = useNotificationContext();
    let {candidateId} = useParams();
    const {company} = useCompanyAuthContext();
    const history = useHistory();
    // minDate={new Date()}
    
    useEffect(() => {
        candidateService.getOne(company._id, candidateId)
        .then(result => {
            setCandidate(result)
        })
    }, [company._id, candidateId])

    const onJobSelect = (e) => {
        jobId = e.target.value;
        setSelectedJob(jobId)
    }

    let interviewSlots = [
        '10:00',
        '11:00',
        '13:00',
        '14:00',
        '15:00'
    ]

    const onTimeSelect = (e) => {
        time = e.target.value;
        interviewSlots = interviewSlots.filter(x => x!= time)
        setSelectedTime(time)
    }

    const onBookBtnClick = (e) => {

        const interviewData = {
            jobId,
            candidateId,
            companyId: company._id,
            date,
            time
        }

        interviewService.bookInterview(interviewData)
            .then(result => {
                if (result.message) {
                    addNotification(result.message, types.error)
                } else {
                    addNotification('Interview added', types.success)
                    history.push(`/jobs/${interviewData.jobId}/interviews`)
            }
        })
    }

    return (
        <section className="jobDetails">
        <div className="jobDetailsInformation">
            <h3>Name:</h3>
            <h1>{candidate.name}</h1>
            <div className="jobDescription">
                <h3>Email:</h3>
                <p>{candidate.email}</p>
                <h3>Interview date:</h3>

                <div className="calendarWrapper">
                    <Calendar onChange={setDate} value={date}/>
                </div>

                <span className="timeSlotWrapper">
                    <select className="selectCandidate" id="availableJobs" name="availableJobs" onChange={onTimeSelect} >
                        <option selected disabled>Time Slot:</option>
                            {interviewSlots.map(j => 
                                <option key={j} value={j}>{j}</option>
                            )}
                        </select>
                </span>

                {candidate.companyJobs 
                ?   <span className="input">
                        <select className="selectCandidate" id="availableJobs" name="availableJobs" onChange={onJobSelect} >
                            <option selected disabled>Job:</option>
                                {candidate.companyJobs.map(j => 
                                    <option key={j._id} value={j._id}>{j.title}</option>
                                )}
                        </select>
                    </span>
                : null
                }
            </div>
        </div>
        <div className="actions">
            <div>
                <button onClick={onBookBtnClick} className="jobDetailsButton">Book an interview</button>                    
            </div>
        </div>
       
      </section>
    )
}