import axios from "axios";
import { JWT_LOCAL_STORAGE_KEY } from "../globals";

export function register({
    name,
    email,
    password
}) {
    return axios.post('/register', { name, email, password })
        .then(({ data }) => {
            const token = data.token;
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

            // Allow the user to stay logged in, even if they close/refresh the tab
            localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token)
            return token;
        })
}

export function login(email, password) {
    return axios.post('/login', {
        email,
        password
    }).then(({ data }) => {
        const token = data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

        // Allow the user to stay logged in, even if they close/refresh the tab
        localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token)
        return token;
    })
}

export function logout() {
    const a = axios;
    debugger
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem(JWT_LOCAL_STORAGE_KEY)
}
