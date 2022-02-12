import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as authService from '../../../services/UserService';
import { AuthContext } from "../../../contexts/AuthContext";
import './Register.css'

export default function Register() {
    const history = useHistory();
    const {login} = useContext(AuthContext);

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let {email, name, password} = Object.fromEntries(new FormData(e.currentTarget));
        authService.register(email, name, password)
            .then(authData => {
                //error message = authData.message

                if (authData.accessToken) {
                    login(authData)
                    history.push('/jobs')
                } else {
                    console.log(authData.message)
                }
                
            })
    }

    return (
        <section className="registerPage">
            <article className="loginPageTitle">
                <h1>Register New User</h1>
            </article>

            <form className="loginForm" method="POST" onSubmit={onRegisterHandler}>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="email">Email</label>
                    <input className="loginFormFieldInput" id="email" type="text" name="email" placeholder="maria.ivanova@company.com" />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="name">Name</label>
                    <input className="loginFormFieldInput" id="name" type="text" name="name" placeholder="Maria Ivanova"/>
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="password">Password</label>
                        <input className="loginFormFieldInput" id="password" type="password" name="password" placeholder="****"/>
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="rePass">Repeat</label>
                    <input className="loginFormFieldInput" id="rePass" type="password" name="rePass" placeholder="****"/>
                </div>
                <input type="submit" className="loginBtn registerBtn" value="Register" />
            </form>

            <p className="field">
                <span>Already have an account? Click <Link className="linkBtn" to="/login">here</Link></span>
            </p>
        </section>
    )
}