import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthCompanyContext = createContext();

const initialState = {
    _id: '',
    accessToken: '',
    email: '',
    name: ''
}

export const AuthCompanyProvider = ({
    children
}) => {
    const [company, setCompany] = useLocalStorage('company', initialState);

    const login = (authData) => {
        setCompany(authData)
    }

    const logout = () => {
        setCompany(initialState)
    }

    return (
        <AuthCompanyContext.Provider value={{company, login, logout}}> 
            {children}
        </AuthCompanyContext.Provider>
    )
}

export const useCompanyAuthContext = () => {
    const companyAuthState = useContext(AuthCompanyContext)
    return companyAuthState;
}