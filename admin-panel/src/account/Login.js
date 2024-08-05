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
      const { id } = useParams();
      const navigate = useNavigate();

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
      
      <div class="w-full">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email or Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
    </div>
    
  </form>
  
  <p class="text-center text-gray-500 text-xs">
  </p>
</div>

    </div>
  );
}

export default Login;
