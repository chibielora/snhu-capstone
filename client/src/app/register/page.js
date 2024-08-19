"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../UserContext';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useUser();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      const newUser = { name, email };
      registerUser(newUser);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <h1 className="main-title">REGISTER</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">NAME:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">EMAIL:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="submit-btn">REGISTER</button>
      </form>
    </div>
  );
}
