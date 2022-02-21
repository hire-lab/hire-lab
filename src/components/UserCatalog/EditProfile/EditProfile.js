import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as userService from '../../../services/UserService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";

export default function EditProfile(){
    const history = useHistory()
    const {id} = useParams()
    const [user, setUser] = useState({})
    const {addNotification} = useNotificationContext()


    useEffect(() => {
        userService.getOne(id)
            .then(result => {
                setUser(result)
            })
    }, [id])

    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        let userData = Object.fromEntries(new FormData(e.currentTarget))
        userService.update(user._id, userData)
            .then(res => {
                addNotification('Profile updated', types.info)
                history.push(`/users/${user._id}`)
            })

    }

    return (
        <section className="createJobPage">
            <article className="loginPageTitle">
                <h1>Edit profile details</h1>
            </article>
            <form className="loginForm" method="POST" onSubmit={onEditSubmitHandler}>               
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="name">Name</label>
                    <input className="loginFormFieldInput" type="text" name="name" id="name" defaultValue={user.name} />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="email">Email</label>
                    <input className="loginFormFieldInput" id="email" type="email" name="email" defaultValue={user.email} />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="cv">CV URL</label>
                    <input className="loginFormFieldInput" id="cv" type="text" name="cv" defaultValue={user.cv}/>
                </div>
                <input className="loginBtn addJobBtn" type="submit" value="Edit Profile" />
            </form>
        </section>
    )
}
