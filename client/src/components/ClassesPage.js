import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function ClassesPage({email, name, isCoach, setUser}) {
  const navigate = useNavigate();
  const [class1, setClass1] = useState([]);
  const [c1Coaches, setc1Coaches] = useState([]);
  const [c2Coaches, setc2Coaches] = useState([]);
  const [c3Coaches, setc3Coaches] = useState([]);
  const [class2, setClass2] = useState([]);
  const [class3, setClass3] = useState([]);
  const [order, setOrder] = useState(0);


  useEffect(() => {
    fetch("http://localhost:5000/get-class-coaches",{
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "class" : "1"})
    }).then((response) => {
      if(response.ok) {
        return response.json();
      }
    }).then((data) => {
      setc1Coaches(data.row)
    }).catch((error) => {
      console.log(error);
    })
    fetch("http://localhost:5000/get-class-coaches",{
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "class" : "2"})
    }).then((response) => {
      if(response.ok) {
        return response.json();
      }
    }).then((data) => {
      setc2Coaches(data.row)
    }).catch((error) => {
      console.log(error);
    })
    fetch("http://localhost:5000/get-class-coaches",{
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "class" : "3"})
    }).then((response) => {
      if(response.ok) {
        return response.json();
      }
    }).then((data) => {
      setc3Coaches(data.row)
    }).catch((error) => {
      console.log(error);
    })
    if(order === 0) {
      fetch("http://localhost:5000/class/1").then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        setClass1(data.row)
      }).catch((error) => {
        console.log(error);
      })
      
      fetch("http://localhost:5000/class/2").then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        setClass2(data.row)
      }).catch((error) => {
        console.log(error);
      })
  
      fetch("http://localhost:5000/class/3").then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        setClass3(data.row)
      }).catch((error) => {
        console.log(error);
      })
    }
    else {
      fetch("http://localhost:5000/class/order/1").then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        setClass1(data.row)
      }).catch((error) => {
        console.log(error);
      })
  
      fetch("http://localhost:5000/class/order/2").then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        setClass2(data.row)
      }).catch((error) => {
        console.log(error);
      })
  
      fetch("http://localhost:5000/class/order/3").then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        setClass3(data.row)
      }).catch((error) => {
        console.log(error);
      })
    }
  }, [order])

  function changeOrder() {
    setOrder(order === 0 ? 1 : 0);
  }

  async function handleSubmit(name,classNum) {
    fetch("http://localhost:5000/deleteClass/"+classNum, {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "name" : `${name}`})
    }).then((response) => {
      if(response.ok) {
      }
    }).catch((error) => {
      console.log(error);
    })
  }
  const class1Coaches = c1Coaches.map((member) => 
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {member.name}
      </th>
      <td class="px-6 py-4">
        {member.phone}
      </td>
      <td class="px-6 py-4">
        {member.email}
      </td>
    </tr>
  );
  const class2Coaches = c2Coaches.map((member) => 
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {member.name}
      </th>
      <td class="px-6 py-4">
        {member.phone}
      </td>
      <td class="px-6 py-4">
        {member.email}
      </td>
    </tr>
  );
  const class3Coaches = c3Coaches.map((member) => 
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {member.name}
      </th>
      <td class="px-6 py-4">
        {member.phone}
      </td>
      <td class="px-6 py-4">
        {member.email}
      </td>
    </tr>
  );
  const class1Members = class1.map((member) => 
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {member.name}
      </th>
      <td class="px-6 py-4">
        {member.phone}
      </td>
      <td class="px-6 py-4">
        {member.address}
      </td>
      <td class="px-6 py-4">
        {member.paid === 0 ? "No" : "Yes"}
      </td>
      <td>
        {isCoach? <button onClick={()=>{handleSubmit(member.name,"1")}} className="my-4 items-center justify-center w-4/5 px-6 py-2.5 text-center text-white duration-200 bg-slate-600 border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                  Remove Members
                </button> : null}   
      </td>
    </tr>
  );
  const class2Members = class2.map((member) => 
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {member.name}
      </th>
      <td class="px-6 py-4">
        {member.phone}
      </td>
      <td class="px-6 py-4">
        {member.address}
      </td>
      <td class="px-6 py-4">
        {member.paid === 0 ? "No" : "Yes"}
      </td>
      <td>
        {isCoach? <button onClick={()=>{handleSubmit(member.name,"2")}} className="my-4 items-center justify-center w-4/5 px-6 py-2.5 text-center text-white duration-200 bg-slate-600 border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                  Remove Members
                </button> : null}   
      </td>
    </tr>
  );
  const class3Members = class3.map((member) => 
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {member.name}
      </th>
      <td class="px-6 py-4">
        {member.phone}
      </td>
      <td class="px-6 py-4">
        {member.address}
      </td>
      <td class="px-6 py-4">
        {member.paid === 0 ? "No" : "Yes"}
      </td>
      <td>
        {isCoach? <button onClick={()=>{handleSubmit(member.name,"3")}} className="my-4 items-center justify-center w-4/5 px-6 py-2.5 text-center text-white duration-200 bg-slate-600 border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                  Remove Members
                </button> : null}   
      </td>
    </tr>
  );

  return (
    <div>
      <div>
        <button onClick={changeOrder} className="my-12 items-center justify-center w-1/5 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
          Sort
        </button>

      </div>
      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">Class 1</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                  Coach
              </th>
              <th scope="col" class="px-6 py-3">
                  Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                  Email
              </th>
            </tr>
          </thead>
          <tbody>
            {class1Coaches}
          </tbody>
        </table>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                  Name
              </th>
              <th scope="col" class="px-6 py-3">
                  Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                  Address
              </th>
              <th scope="col" class="px-6 py-3">
                  Paid
              </th>
              {isCoach?<th scope="col" class="px-6 py-3">
                Remove Member
              </th>: null}
            </tr>
          </thead>
          <tbody>
            {class1Members}
          </tbody>
        </table>
      </div>
      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">Class 2</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                  Coach
              </th>
              <th scope="col" class="px-6 py-3">
                  Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                  Email
              </th>
            </tr>
          </thead>
          <tbody>
            {class2Coaches}
          </tbody>
        </table>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                  Name
              </th>
              <th scope="col" class="px-6 py-3">
                  Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                  Address
              </th>
              <th scope="col" class="px-6 py-3">
                  Paid
              </th>
              {isCoach?<th scope="col" class="px-6 py-3">
                Remove Member
              </th>: null}
            </tr>
          </thead>
          <tbody>
            {class2Members}
          </tbody>
        </table>
      </div>
      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">Class 3</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                  Coach 
              </th>
              <th scope="col" class="px-6 py-3">
                  Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                  Email
              </th>
            </tr>
          </thead>
          <tbody>
            {class3Coaches}
          </tbody>
        </table>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                  Name
              </th>
              <th scope="col" class="px-6 py-3">
                  Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                  Address
              </th>
              <th scope="col" class="px-6 py-3">
                  Paid
              </th>
              {isCoach?<th scope="col" class="px-6 py-3">
                Remove Member
              </th>: null}
            </tr>
          </thead>
          <tbody>
            {class3Members}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ClassesPage;
