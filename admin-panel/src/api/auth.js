import axios from "axios";
import { JWT_LOCAL_STORAGE_KEY } from "../globals";

export function register({
    name,
    email,
    password
}) {
    axios.post('/register', { name, email, password }).then(token => {
        axios.defaults.headers["Authorization"] = `Bearer ${token}`

        // Allow the user to stay logged in, even if they close/refresh the tab
        localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token)
        return token;
    })
}

export function login(email, password) {
    axios.post('/login', {
        email,
        password
    }).then(token => {
        axios.defaults.headers["Authorization"] = `Bearer ${token}`

        // Allow the user to stay logged in, even if they close/refresh the tab
        localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token)
        return token;
    })
}

export function logout() {
    axios.post('/logout').then(() => {
        delete axios.defaults.header["Authorization"]
        localStorage.removeItem(JWT_LOCAL_STORAGE_KEY)
    })
}