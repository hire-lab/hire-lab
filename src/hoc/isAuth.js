import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthCompanyContext } from "../contexts/AuthCompanyContext";


export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const {company} = useContext(AuthCompanyContext);
        const history = useHistory();

        if (!company.email) {
            history.push('/login');
            return null;
        }
        return (
            <Component {...props}/>
        )
    }
    return WrapperComponent;
}