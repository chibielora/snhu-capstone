"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../UserContext';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useUser();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        username,
        password,
      });
      if (response.data.success) {
        alert('Login successful');
        const newUser = { username };
        registerUser(newUser);
        router.push('/');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <h1 className="main-title">Login</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">USERNAME:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}
