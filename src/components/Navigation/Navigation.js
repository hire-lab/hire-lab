import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import { AuthCompanyContext } from '../../contexts/AuthCompanyContext';
import './Navigation.css'

export default function Navigation () {
    const {user} = useContext(AuthContext);
    const {company} = useContext(AuthCompanyContext);
    let navigation = null;

    /*            
            <li className='homeNavWrapper'><Link className='homeNav' to={`/interviews/${company._id}`}>Interviews</Link></li>*/

    let userNavigation = (
        <ul className='navSectionNavbar'>
            <li className='homeNavWrapper'><span className='homeNav'>Welcome, {user.name}</span></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/jobs">Jobs</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to={`/users/${user._id}`}>Profile</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/logout">Logout</Link></li>                      
        </ul>
    );

    let companyNavigation = (
        <ul className='navSectionNavbar'>
            <li className='homeNavWrapper'><span className='homeNav'>Welcome, {company.name}</span></li>
            <li className='homeNavWrapper'><Link className='homeNav' to={`/jobs/${company._id}/jobs`}> {company.name} Jobs</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to={`/candidates/${company._id}/candidates`}>Candidates</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/company/logout">Logout</Link></li>                      
        </ul>
    );

    let guestNavigation = (
        <ul className='navSectionNavbar'>
            <li className='homeNavWrapper'><Link className='homeNav' to="/about">About</Link></li>
            <li className='homeNavWrapper'><Link className='homeNav' to="/jobs">Jobs</Link></li>
            <span className='dropdown'>
                <button className='dropBtn homeNav'>
                    Login
                    <i className="fa fa-angle-down"></i>
                </button>
                <section className='dropdownContent'>
                    <li className='homeNavWrapper'>
                        <i className="far fa-user"></i>
                        <Link className='homeNav' to="/login"> User</Link>
                    </li>
                    <li className='homeNavWrapper'>
                        <i className="far fa-building"></i>
                        <Link className='homeNav' to="/company/login"> Company</Link>
                    </li>
                </section>
            </span>
            <span className='dropdown'>
                <button className='dropBtn homeNav'>
                    Register
                    <i className="fa fa-angle-down"></i>
                </button>
                <section className='dropdownContent'>
                    <li className='homeNavWrapper'>
                        <i className="far fa-user"></i>
                        <Link className='homeNav' to="/register"> User</Link>
                    </li>
                    <li className='homeNavWrapper'>
                        <i className="far fa-building"></i>
                        <Link className='homeNav' to="/company/register"> Company</Link>
                    </li>
                </section>
            </span>                
        </ul>
    )

    if (company.email != ''){ 
        navigation = companyNavigation
    } else if (user.email != ''){
        navigation = userNavigation
    } else {
        navigation = guestNavigation
    }

    return (
        <nav className='navbar'>
          <section className="navSectionContainer">
            <article className="navSectionTitleWrapper">
                <Link className="navSectionTitle" to="/">Hire Lab</Link>
            </article>
            <article id="navSectionNavbarWrapper">
                {navigation}
            </article>
        </section>
    </nav>
    )
}