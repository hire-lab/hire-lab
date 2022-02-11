import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const {user} = useContext(AuthContext);
        const history = useHistory();

        if (!user.email) {
            history.push('/login');
            return null;
        }
        return (
            <Component {...props}/>
        )
    }
    return WrapperComponent;
}