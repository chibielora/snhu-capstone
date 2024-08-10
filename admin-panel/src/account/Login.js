import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Login() {
    const [trip, setTrip] = useState({
        code: '',
        name: '',
        length: '',
        start: '',
        resort: '',
        perPerson: '',
        image: '',
        description: ''
    });
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = () => {
        const { username, password } = credentials;
        if ((username === 'admin' && password === 'admin123') || (username === 'user' && password === 'user123')) {
            alert('Login successful');
            // Navigate to a different route if necessary
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className='inline-block
                    bg-gradient-to-b
                    from-teal-600
                    to-teal-700
                    hover:from-orange-200
                    hover:to-orange-300
                    hover:text-gray-800
                    border-collapse
                    px-10 py-3
                    h-full
                    w-full
                    uppercase text-xl'>
                <h1 className="text-2xl font-bold mb-4">Login</h1>
            </div>

            <div className="w-full">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email or Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={credentials.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="******************"
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-500 text-xs">
                </p>
            </div>
        </div>
    );
}

export default Login;
