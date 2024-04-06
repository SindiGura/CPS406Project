import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import dropDown from './DropDown';

//treasurer@email.com
function TreasurerPage() {
  const navigate = useNavigate();
  const [revenue, setRevenue] = useState([]);
  const [debt, setDebt] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [dropDown, setDropDown] = useState(false);


  useEffect(() => {
    fetch("http://localhost:5000/get-coaches").then((response)=>{
      if(response.ok){
        return response.json();
      }
    }).then((data)=>{
      setCoaches(data.row);
    }).catch((error)=>{
      console.log(error)
    })

    fetch("http://localhost:5000/revenue").then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        setRevenue(data.row)
      }).catch((error) => {
        console.log(error);
      })

    fetch("http://localhost:5000/debt").then((response) => {
      if(response.ok) {
        return response.json();
      }
    }).then((data) => {
      setDebt(data.row)
    }).catch((error) => {
      console.log(error);
    })
  },[])

  const revenueList = revenue.map((item) => 
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {item.name}
      </th>
      <td class="px-6 py-4">
        {`$${item.amount}`}
      </td>
    </tr>
  );
  const debtList = debt.map((item) => 
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {item.name}
      </th>
      <td class="px-6 py-4">
        {`$${item.amount}`}
      </td>
    </tr>
  );
  const coachesList = coaches.map((member) => 
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
    <td class="px-6 py-4">
      {member.address}
    </td>
    <td class="px-6 py-4">
      <form onSubmit={(e)=>{handleSubmit(e,member.name)}}>
        <label className="px-4"><input  type="radio" name="class" value="" defaultChecked={member.classes==="" ? true : false}/>No Class</label>
        <label className="px-4"><input  type="radio" name="class" value="1" defaultChecked={member.classes==="1" ? true : false}/> Class 1</label>
        <label className="px-4"><input  type="radio" name="class" value="2" defaultChecked={member.classes==="2" ? true : false} />Class 2</label>
        <label className="px-4"><input  type="radio" name="class" value="3" defaultChecked={member.classes==="3" ? true : false}/>Class 3</label>
        <button className="px-2" type="submit">Submit form</button>
      </form>
    </td>
  </tr>
);
  function handleSubmit(e,name){
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const c = formJson["class"];

    fetch("http://localhost:5000/update-coach-classes",{
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "class" : `${c}`, "name" : `${name}`})
    }).then((response)=>{
      navigate("/treasurer")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const totalRevenueList = revenue.map(a => a.amount)
  const totalRevenue = totalRevenueList.reduce((sum, a) => sum + a, 0);
  const totalDebtList = debt.map(a => a.amount)
  const totalDebt = totalDebtList.reduce((sum, a) => sum + a, 0);

  return (
    <div>
      <div className='flex justify-center'>
          <div className="grid grid-rows-4 pt-24 w-1/4 "
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}>
          <div>
              <h2 className="text-4xl text-black text-center ">Welcome, Treasurer</h2>
          </div>
          {dropDown ? (<>
              <button className='hover:bg-gray-200 hover:rounded-xl ' onClick={()=> navigate("/")}
              >Logout</button>
              </>) : null}
          </div>
      </div>
      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">Revenue</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {revenueList}
          </tbody>
        </table>
      </div>
      <div className="col-span-full block mb-3 text-md font-medium text-gray-600 my-2 ml-4">
        {`Total Revenue: $${totalRevenue}`}
      </div>
      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">Debt</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {debtList}
          </tbody>
        </table>
      </div>
      <div className="col-span-full block mb-3 text-md font-medium text-gray-600 my-2 ml-4">
        {`Total Debt: $${totalDebt}`}
      </div>

      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">Coaches</h1>

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
                  Email
              </th>
              <th scope="col" class="px-6 py-3">
                  Address
              </th>
              <th scope="col" class="px-6 py-3">
                  Classes
              </th>
            </tr>
          </thead>
          <tbody>
            {coachesList}
          </tbody>
        </table>
      </div>

      <div className="col-span-full block mb-3 text-md font-medium text-gray-600 my-2 ml-4">
        {`Total Debt: $${totalDebt}`}
      </div>
      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">{`Profit: $${totalRevenue - totalDebt}`}</h1>
      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">{`Profit: $${totalRevenue - totalDebt}`}</h1>
      
    </div>
  );
}

export default TreasurerPage;
