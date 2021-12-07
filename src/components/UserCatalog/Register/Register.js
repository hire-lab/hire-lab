import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
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
                login(authData)
                history.push('/jobs')
            })
    }

    return (
        <section className="registerPage">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Register New User</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <div className="form-wrapper">
              <form method="POST" onSubmit={onRegisterHandler}>
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="email">Email</label>
                            <input className='form-control' id="email" type="text" name="email" placeholder="maria.ivanova@company.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="name">Name</label>
                            <input className='form-control' id="name" type="text" name="name" placeholder="Maria Ivanova"/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="password">Password</label>
                            <input className='form-control' id="password" type="password" name="password" placeholder="****"/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="rePass">Repeat</label>
                            <input className='form-control' id="rePass" type="password" name="rePass" placeholder="****"/>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Register" />
                    </div>
                </div>
              </form>

            </div>
            <p className="field">
                <span>Already part of the team? Click <Link to="/login">here</Link></span>
            </p>
        </section>
    )
}