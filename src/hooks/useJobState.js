import { useState, useEffect } from "react";
import * as jobService from '../services/JobService';

const useJobState = (jobId) => {
    const [job, setJob] = useState({});

    useEffect(() => {
        jobService.getOne(jobId)
            .then(result => {
                setJob(result)
            })
    }, [jobId])

    return [
        job,
        setJob
    ]
}

export default useJobState;