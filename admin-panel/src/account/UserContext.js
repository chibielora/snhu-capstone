import axios from "axios";
import { createContext, useState, useContext, useEffect } from 'react';
import { JWT_LOCAL_STORAGE_KEY } from "../globals";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
    const userFromToken = token ? JSON.parse(atob(token.split(".")[1])) : null;
    const [user, setUser] = useState(userFromToken ?
        {
            _id: userFromToken._id,
            name: userFromToken.name,
            email: userFromToken.email
        } : null
    );

    useEffect(() => {
        // Intercept responses
        // If it's login, set user to the response data
        // If it was a logout request, clear the user
        const interceptorId = axios.interceptors.response.use(response => {
            if (response.config.url === "/login") {
                setUser(response.data);
            } else if (response.config.url === "/logout") {
                setUser(null);
            }
            return response;
        })

        // Clean-up, remove interceptor
        return () => {
            axios.interceptors.response.eject(interceptorId);
        }
    }, [])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
