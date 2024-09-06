"use client"

import axios from 'axios';
import { useState } from "react";


export const Signup = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="bg-white p-8 rounded shadow-lg">
          <div className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="username" 
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange = {e => setUsername(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange = {e => setPassword(e.target.value)}
            />
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick = {() => {
              axios.post("http://localhost:3000/api/user", {
                username,
                password
              })
            }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
