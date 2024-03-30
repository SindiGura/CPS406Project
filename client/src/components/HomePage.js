import React from 'react';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Payment from './Payment';

function HomePage({email,name}) {

  const {state} = useLocation();
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);
  const [payment, showPayment] = useState(false);

  const [aClass1, setAClass1] = useState(0);
  const [aClass2, setAClass2] = useState(0);
  const [aClass3, setAClass3] = useState(0);
  const [aClass1Pay, setAClass1Pay] = useState(0);
  const [aClass2Pay, setAClass2Pay] = useState(0);
  const [aClass3Pay, setAClass3Pay] = useState(0);
  const [class1, setClass1] = useState("You are not currently attending Class 1, would you like to join?");
  const [class1Pay, setClass1Pay] = useState("Would you like to pay now or later?");
  const [class2, setClass2] = useState("You are not currently attending Class 2, would you like to join?");
  const [class2Pay, setClass2Pay] = useState("Would you like to pay now or later?");
  const [class3, setClass3] = useState("You are not currently attending Class 3, would you like to join?");
  const [class3Pay, setClass3Pay] = useState("Would you like to pay now or later?");

  const onClosePayment = () => showPayment(false)

  async function handleSubmit(e) {
    fetch("http://localhost:5000/submit-classes", {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "member" : `${email}`, "class1" : `${aClass1}`, "class2" : `${aClass2}`, "class3" : `${aClass3}`, "class1pay" : `${aClass1Pay}`, "class2pay" : `${aClass2Pay}`, "class3pay" : `${aClass3Pay}` })
    }).then((response)=>{
      if(response.ok){
        navigate("/home");
        console.log("WORKED");
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(() => {
    fetch("http://localhost:5000/members/1", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ "email" : `${email}` })
      }).then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        if(data.row.length === 0) {
          setClass1("You are not currently attending Class 1, would you like to join?");
        }
        else {
          setClass1("You have signed up for Class 1!");
          document.getElementById("class-1-a").classList.add("hidden");
          if(data.row[0].paid === 1) {
            setClass1Pay("You have paid for Class 1.");
            document.getElementById("class-1-pay-a").classList.add("hidden");
          }
          else {
            setClass1Pay("Would you like to pay now or later?");
            document.getElementById("class-1-pay").classList.remove("hidden");
            document.getElementById("class-1-pay-a").classList.remove("hidden");
          }
        }
      }).catch((error) => {
        console.log(error);
      })

      fetch("http://localhost:5000/members/2", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ "email" : `${email}` })
      }).then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        if(data.row.length === 0) {
          setClass2("You are not currently attending Class 2, would you like to join?");
        }
        else {
          setClass2("You have signed up for Class 2!");
          document.getElementById("class-2-a").classList.add("hidden");
          if(data.row[0].paid === 1) {
            setClass2Pay("You have paid for Class 2.");
            document.getElementById("class-2-pay-a").classList.add("hidden");
          }
          else {
            setClass2Pay("Would you like to pay now or later?");
            document.getElementById("class-2-pay").classList.remove("hidden");
            document.getElementById("class-2-pay-a").classList.remove("hidden");
          }
        }
      }).catch((error) => {
        console.log(error);
      })

      fetch("http://localhost:5000/members/3", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ "email" : `${email}` })
      }).then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        if(data.row.length === 0) {
          setClass3("You are not currently attending Class 3, would you like to join?");
        }
        else {
          setClass3("You have signed up for Class 3!");
          document.getElementById("class-3-a").classList.add("hidden");
          if(data.row[0].paid === 1) {
            setClass3Pay("You have paid for Class 3.");
            document.getElementById("class-3-pay-a").classList.add("hidden");
          }
          else {
            setClass3Pay("Would you like to pay now or later?");
            document.getElementById("class-3-pay").classList.remove("hidden");
            document.getElementById("class-3-pay-a").classList.remove("hidden");
          }
        }
      }).catch((error) => {
        console.log(error);
      })
  })

  function showPay1() {
    setAClass1(1);
    document.getElementById("class-1-pay").classList.remove("hidden");
    document.getElementById("class-1-pay-a").classList.remove("hidden");
  }

  function hidePay1() {
    setAClass1(0);
    document.getElementById("class-1-pay").classList.add("hidden");
    document.getElementById("class-1-pay-a").classList.add("hidden");
  }

  function showPay2() {
    setAClass2(1);
    document.getElementById("class-2-pay").classList.remove("hidden");
    document.getElementById("class-2-pay-a").classList.remove("hidden");
  }

  function hidePay2() {
    setAClass2(0);
    document.getElementById("class-2-pay").classList.add("hidden");
    document.getElementById("class-2-pay-a").classList.add("hidden");
  }

  function showPay3() {
    setAClass3(1);
    document.getElementById("class-3-pay").classList.remove("hidden");
    document.getElementById("class-3-pay-a").classList.remove("hidden");
  }

  function hidePay3() {
    setAClass3(0);
    document.getElementById("class-3-pay").classList.add("hidden");
    document.getElementById("class-3-pay-a").classList.add("hidden");
  }

  function nowPay1() {
    setAClass1Pay(1);
  }

  function laterPay1() {
    setAClass1Pay(0);
  }

  function nowPay2() {
    setAClass2Pay(1);
  }

  function laterPay2() {
    setAClass2Pay(0);
  }

  function nowPay3() {
    setAClass3Pay(1);
  }

  function laterPay3() {
    setAClass3Pay(0);
  }

  
  return (
    <section>
      <div className='flex justify-center'>
        <div className="grid grid-rows-4 pt-24 w-1/4 "
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}>
          <div>
            <h2 className="text-4xl text-black text-center ">Welcome, {name}</h2>
          </div>
          {dropDown ? (<>
            <button className='hover:bg-gray-200 hover:rounded-xl ' onClick={()=> navigate("/")}
            >Logout</button>
            <button className='hover:bg-gray-200 hover:rounded-xl
            ' onClick={()=> navigate("/classes")}
            >Classes</button>
            <button className='hover:bg-gray-200 hover:rounded-xl' onClick={()=>showPayment(true)}>Add Payment</button></>) : null}
        </div>
      </div>

      <div className="relative items-center w-full px-5 py-40 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
          </div>
          <form>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label className="block mb-3 text-md font-medium text-gray-600">
                  {class1}
                </label>
                <div id="class-1-a">
                  <div className="flex items-center mb-4">
                    <input onClick={showPay1} type="radio" name="class-1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input onClick={hidePay1} type="radio" name="class-1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                  </div>
                </div>
                <div>
                  <label id="class-1-pay" className="block mb-3 text-md font-medium text-gray-600 hidden">
                    {class1Pay}
                  </label>
                  <div id="class-1-pay-a" className="hidden">
                    <div className="flex items-center mb-4">
                      <input onClick={nowPay1} type="radio" name="class-1-pay" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Now</label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input onClick={laterPay1} type="radio" name="class-1-pay" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Later</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-md font-medium text-gray-600">
                  {class2}
                </label>
                <div id="class-2-a">
                  <div className="flex items-center mb-4">
                    <input onClick={showPay2} id="class-2-yes" type="radio" name="class-2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input onClick={hidePay2} id="class-2-no" type="radio" name="class-2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                  </div>
                </div>
                <div>
                  <label id="class-2-pay" className="block mb-3 text-md font-medium text-gray-600 hidden">
                    {class2Pay}
                  </label>
                  <div id="class-2-pay-a" className="hidden">
                    <div className="flex items-center mb-4">
                      <input onClick={nowPay2} type="radio" value="" name="class-2-pay" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Now</label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input onClick={laterPay2} type="radio" value="" name="class-2-pay" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Later</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-md font-medium text-gray-600">
                  {class3}
                </label>
                <div id="class-3-a">
                  <div className="flex items-center mb-4">
                    <input onClick={showPay3} type="radio" name="class-3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input onClick={hidePay3} type="radio"name="class-3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                  </div>
                </div>
                <div>
                  <label id="class-3-pay" className="block mb-3 text-md font-medium text-gray-600 hidden">
                    {class3Pay}
                  </label>
                  <div id="class-3-pay-a" className="hidden">
                    <div className="flex items-center mb-4">
                      <input onClick={nowPay3} type="radio" name="class-3-pay" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Now</label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input onClick={laterPay3} type="radio" name="class-3-pay" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Later</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=''>
          
          <div className='absolute'><><button className='text-xl absolute'>x</button><Payment email={email} 
          onClose={onClosePayment} visible={payment} class1={aClass1Pay} class2={aClass2Pay} class3={aClass3Pay}/></> </div>
        </div>
    </section>
  );
}

export default HomePage;
