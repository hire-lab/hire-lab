import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {AuthContext} from '../../../contexts/AuthContext';
import * as userService from '../../../services/UserService';

export default function Logout() {
    const {user, logout} = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        userService.logout(user.accessToken)
            .then(() => {
                logout()
                history.push('/')
            })
    }, [])
    
    return null;
}