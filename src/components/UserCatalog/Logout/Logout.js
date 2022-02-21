import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {AuthContext} from '../../../contexts/AuthContext';
import * as userService from '../../../services/UserService';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";

export default function Logout() {
    const {user, logout} = useContext(AuthContext);
    const history = useHistory();
    const {addNotification} = useNotificationContext()

    useEffect(() => {
        userService.logout(user.accessToken)
            .then(() => {
                logout()
                addNotification('You logged out', types.info)
                history.push('/')
            })
    }, [])
    
    return null;
}