import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import * as userService from '../../../services/UserService';

export default function UserProfile() {
    const {id} = useParams()
    const [user, setUser] = useState({})

    /*const history = useHistory()
    const deleteHandler = (e) => {
        e.preventDefault()

        candidateService.del(candidateId, user.accessToken)
            .then(() => {
                history.push('/candidates')
            })
    }*/

    useEffect(() => {
        userService.getOne(id)
            .then(result => {
                setUser(result)
            })
    }, [id])

    return (
        <section className="jobDetails">
            <div className="jobDetailsInformation">
                <h3>Name:</h3>
                <h1>{user.name}</h1>
                <div className="jobDescription">
                    <h3>Email:</h3>
                    <p>{user.email}</p>
                    <h3>CV:</h3>
                    <a className="cvLink" href={`http://${user.cv}`} target="_blank">{user.cv}</a> 
                </div>
                <div className="actions">
                    <Link className="jobDetailsButton editJob" to={`/users/${user._id}/edit`}>Edit Profile</Link>
                    <Link className="jobDetailsButton editJob" to='#'>Delete Profile</Link>
                </div>
            </div>
        </section>
    )
}
