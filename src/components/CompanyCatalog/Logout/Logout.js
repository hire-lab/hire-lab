import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {AuthContext} from '../../../contexts/AuthContext';
import * as CompanyService from '../../../services/CompanyService';

export default function CompanyLogout() {
    const {user, logout} = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        CompanyService.logout(user.accessToken)
            .then(() => {
                logout()
                history.push('/')
            })
    }, [])
    
    return null;
}