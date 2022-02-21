import { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import {AuthContext} from '../../../contexts/AuthContext';
import * as userService from '../../../services/UserService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import ConfirmDialog from "../../ConfirmDialog/ConfirmDialog";
import './UserProfile.css'

export default function UserProfile() {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const {logout} = useContext(AuthContext);
    const [showDeleteDialog, setDeleteDialog] = useState(false);
    const {addNotification} = useNotificationContext()
    const history = useHistory()

    const deleteHandler = (e) => {
        e.preventDefault()

        userService.del(user._id, user.accessToken)
            .then(() => {
                logout()
                addNotification('Account deleted', types.info)
                history.push('/')
            })
            .finally(() => {
                setDeleteDialog(false)
            })
    }


    const deleteClickHandler = (e) => {
        e.preventDefault();

        setDeleteDialog(true)
    }

    useEffect(() => {
        userService.getOne(id)
            .then(result => {
                setUser(result)
            })
    }, [id])

    return (
        <>
        <ConfirmDialog show={showDeleteDialog} onCancel={() => setDeleteDialog(false)} onConfirm={deleteHandler}/>
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
                    <Link className="jobDetailsButton editJob deleteBtn" to='#' onClick={deleteClickHandler}>Delete Account</Link>
                </div>
            </div>
        </section>
        </>
    )
}
