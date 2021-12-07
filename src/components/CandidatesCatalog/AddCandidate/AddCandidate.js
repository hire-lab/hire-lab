import { useHistory } from 'react-router';
import * as CandidateService from '../../../services/CandidateService';
import './AddCandidate.css'

export default function AddCandidate(){
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
            history.push('/candidates')
        })
    }


    return (
        <section className="addCandidatePage">
        <article>
            <h1>Add new candidate</h1>
        </article>
        <form method="POST" onSubmit={addCandidateHandler}>               
            <div className="row space-top">
                <div className="col-md-4">
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="email">Email</label>
                        <input className="form-control" id="email" type="email" name="email" placeholder="Email" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Candidate" />
                </div>
            </div>
        </form>
</section>
    )
}