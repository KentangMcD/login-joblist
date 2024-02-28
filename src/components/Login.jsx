import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "dadang@mail.com" && password === "dadang") {
      localStorage.setItem("isLogin", true);
      //   navigate("/home");
      location.replace("/jobs");
    } else {
      alert("invalid email & password");
    }
  };

  const islogin = localStorage.getItem("isLogin")
  


  return (
    <>
        {islogin ? <Navigate to="/jobs"/> :( <div className="min-h-screen bg-cyan-light relative overflow-hidden">
    <div className="absolute inset-0 bg-[#0f1e32] z-0"></div>
    <main className="flex flex-col items-center px-6 relative z-10 min-h-screen justify-center">
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-600">Sign In</p>
            <h2 className="text-xl font-bold">Join our community</h2>
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="log-in">
            <button
              className="w-full py-4 bg-cyan-dark hover:bg-[#eac77d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </main>
    <img
      src="https://miro.medium.com/v2/resize:fit:1200/1*ZJBkfG3WN83TLlr7ESYrLA.jpeg" // Replace with your image path
      alt="Developer working on code"
      className="absolute inset-0 h-full w-full object-cover opacity-25"
    />
  </div>) }</>

   
  );
}
