import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (formData.get("password") !== formData.get("confirmPassword")) {
            alert("Passwords do not match")
            return;
        }
        axios.post(`${process.env.REACT_APP_API_URL}/register`, formData);
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="full-name">
                                Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="full-name" type="text" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="full-name">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="text" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="confirmPassword" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="confirm-password" type="password" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">
                                Send me your newsletter!
                            </span>
                        </label>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign Up
                            </button>
                            <Link to="/login" className="text-blue-500 text-xs italic">Sign In</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
