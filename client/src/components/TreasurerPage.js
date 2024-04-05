import React from 'react';
import { useState, useEffect } from 'react';

function TreasurerPage() {
  const [revenue, setRevenue] = useState([]);
  const [debt, setDebt] = useState([]);

  useEffect(() => {
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
  })

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

  const totalRevenueList = revenue.map(a => a.amount)
  const totalRevenue = totalRevenueList.reduce((sum, a) => sum + a, 0);
  const totalDebtList = debt.map(a => a.amount)
  const totalDebt = totalDebtList.reduce((sum, a) => sum + a, 0);

  return (
    <div>
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
      <h1 class="text-gray-900 uppercase text-2xl font-bold my-2 ml-4">{`Profit: $${totalRevenue - totalDebt}`}</h1>
    </div>
  );
}

export default TreasurerPage;
