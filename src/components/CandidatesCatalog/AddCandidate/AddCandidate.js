import { useHistory } from 'react-router';
import { isAuth } from "../../../hoc/isAuth";
import * as CandidateService from '../../../services/CandidateService';
import './AddCandidate.css'

const AddCandidate = () => {
    const history = useHistory()
    
    const addCandidateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let email = formData.get('email')

        CandidateService.create({
            name,
            email
        }).then(result => {
            //result.message == error message!
            history.push('/candidates')
        })
    }


    return (
        <section className="addCandidatePage">
            <article className="loginPageTitle">
                <h1>Add new candidate</h1>
            </article>
            <form className="loginForm" method="POST" onSubmit={addCandidateHandler}>               
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="name">Name</label>
                    <input className="loginFormFieldInput" type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="loginFormField">
                    <label className="loginFormFieldLabel" htmlFor="email">Email</label>
                    <input className="loginFormFieldInput" id="email" type="email" name="email" placeholder="Email" />
                </div>
                <input className="loginBtn addJobBtn" type="submit" value="Add Candidate" />
            </form>
        </section>
    )
}

export default isAuth(AddCandidate)
