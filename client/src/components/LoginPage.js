import React, { useEffect } from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function LoginPage({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [treasurer, setTreasurer] = useState(false)
  const navigate = useNavigate();

  const [checked, setChecked] = React.useState(false);

  useEffect(()=>{
    console.log(checked)
  })

  const handleChange = () => {
    setChecked(!checked);
  };

  async function handleSubmit(e) {
    e.preventDefault(); 
    if(!email)
      toast.warning("You need a email")
    else if (!password)
      toast.warning("You need a password")
    else if(password === "123" && email === "treasurer@email.com") {
      navigate("/treasurer");
    }
    else {//get server response and post info
      fetch("http://localhost:5000/login", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ "email" : `${email}`, "password" : `${password}` , "isCoach" : `${checked}`})
      }).then((response) => {
        if(response.ok) {
          return response.json();
        }
        else
          toast.warning("Incorrect login details. If you are a coach, please check the box.")
      }).then((data) => {
        setUser(data.row[0].email, data.row[0].name)
        if(!checked)
          navigate("/home");
        else
          navigate("/coach");
        
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  return (
    <section>
      
      <div className="relative items-center w-full px-5 py-40 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black text-center">SIGN IN</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="password">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="user@email.com"
                  autoComplete="off"
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="confirm_password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="******"
                  autoComplete="off"
                  type="password"
                />
              </div>
              <label>
              <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                  I am a coach
              </label>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <div className="col-span-full">
              <Link to="/create-account"
                  className="items-center justify-center w-full px-3 text-center text-black duration-200 hover:text-slate-400 "
                  type="submit"
                >
                  Register for a new Account
                </Link>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default LoginPage;
