import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function CreateAccountPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  async function handleSubmit(e) {
    e.preventDefault(); 
    if(!email)
      toast.warning("You need an email")
    else if (!password)
      toast.warning("You need a password")
    else if (!name)
      toast.warning("You need a name")
    else if (!address)
    toast.warning("You need an address")
    else if (!phone)
    toast.warning("You need a phone number")
    else {//get server response and post info
      await fetch("http://localhost:5000/create-account", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ "email" : `${email}`, "password" : `${password}`, "name" : `${name}`, "address" : `${address}`, "phone" : `${phone}`, "isCoach" : `${checked}`})
      }).then((response) => {
        if(response.ok) {
          window.location.href=(`/login`)
        }
        else{
          toast.warning("Something went wrong")
        }
      }).catch((error) => {
        toast.warning("Account already exists")
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
              <h2 className="text-4xl text-black text-center">CREATE ACCOUNT</h2>
            </div>
          </div>
          <form>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="user@email.com"
                  autoComplete="off"
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="******"
                  autoComplete="off"
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="name">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="John Doe"
                  autoComplete="off"
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="address">
                  Address
                </label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="address"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="123 Toronto Street"
                  autoComplete="off"
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="1234567890"
                  autoComplete="off"
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
                  onClick={handleSubmit}
                >
                  Create New Account
                </button>
              </div>
              <div className="col-span-full">
              <Link to="/"
                  className="items-center justify-center w-full px-3 text-center text-black duration-200 hover:text-slate-400 "
                  type="submit"
                >
                  Main Page 
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

export default CreateAccountPage;
