import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {AuthCompanyContext} from '../../../contexts/AuthCompanyContext';
import * as CompanyService from '../../../services/CompanyService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";

export default function CompanyLogout() {
    const {company, logout} = useContext(AuthCompanyContext);
    const history = useHistory();
    const {addNotification} = useNotificationContext()

    useEffect(() => {
        CompanyService.logout(company.accessToken)
            .then(() => {
                logout()
                addNotification('You logged out', types.info)
                history.push('/')
            })
    }, [])
    
    return null;
}