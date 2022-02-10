import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import './Navigation.css'

export default function Navigation () {
    const {user} = useContext(AuthContext);

    let userNavigation = (
        <ul className='navSectionNavbar'>
            <li className='homeNavWrapper'><span className='homeNav'>Welcome, {user.name}</span></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/jobs">Jobs</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/candidates">Candidates</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/interviews">Interviews</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/logout">Logout</Link></li>                      
        </ul>
    );

    let guestNavigation = (
        <ul className='navSectionNavbar'>
            <li className='homeNavWrapper'><Link className='homeNav' to="/about">About</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/jobs">Jobs</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/login">Login</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/register">Register</Link></li>                  
        </ul>
    )
    return (
        <nav className='navbar'>
          <section className="navSectionContainer">
            <article className="navSectionTitleWrapper">
                <Link className="navSectionTitle" to="/">Hire Lab</Link>
            </article>
            <article id="navSectionNavbarWrapper">
            {user.email
                    ? userNavigation
                    : guestNavigation
            }
            </article>
        </section>
    </nav>
    )
}