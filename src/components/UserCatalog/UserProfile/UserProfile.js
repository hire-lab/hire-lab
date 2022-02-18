import { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import {AuthContext} from '../../../contexts/AuthContext';
import * as userService from '../../../services/UserService';
import './UserProfile.css'

export default function UserProfile() {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const {logout} = useContext(AuthContext);

    const history = useHistory()
    const deleteHandler = (e) => {
        e.preventDefault()

        userService.del(user._id, user.accessToken)
            .then(() => {
                logout()
                history.push('/')
            })
    }

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
                    <Link className="jobDetailsButton editJob deleteBtn" to='#' onClick={deleteHandler}>Delete Profile</Link>
                </div>
            </div>
        </section>
    )
}
