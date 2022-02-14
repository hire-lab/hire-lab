import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {AuthCompanyContext} from '../../../contexts/AuthCompanyContext';
import * as CompanyService from '../../../services/CompanyService';

export default function CompanyLogout() {
    const {company, logout} = useContext(AuthCompanyContext);
    const history = useHistory();

    useEffect(() => {
        CompanyService.logout(company.accessToken)
            .then(() => {
                logout()
                history.push('/')
            })
    }, [])
    
    return null;
}