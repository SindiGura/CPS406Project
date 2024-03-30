import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Payment({email,visible,onClose,class1,class2,class3}) {   
  const [cardNum, setCardNum ] = useState("");
  const [cardName, setCardName] = useState("");
  const [date, setDate] = useState("");
  const [threeDigit, setThreeDigit] = useState("");
  
  if(!visible) return null;

  async function handleSubmit(e) {
    e.preventDefault(); 
    if(!cardNum || cardNum.length < 19)
      console.error("Invalid credit card number")
    if (!cardName)
      console.error("Inavlid credit card holder")
    if (!date)
      console.error("Inavlid expiry date")
    if (!threeDigit || threeDigit.length < 3)
      console.error("Please provide the three digits on the back of your card")
    if (cardNum.length === 19 && cardName && date && threeDigit.length === 3) {//get server response and post info
      console.log("meow")
      fetch("http://localhost:5000/submit-pay", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"member" : `${email}`, "class1" : `${class1}`, "class2" : `${class2}`, "class3" : `${class3}`})
      }).then((response) => {
        if(response.ok) {
          window.location.href=(`/login`)
        }
      }).catch((error) => {
        console.log(error);
      })
    }
  }
  //i may not have made this XD --SP
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue
      .replace(/\s/g, '') // Remove any existing spaces
      .replace(/(\d{4})/g, '$1 ').trim(); // Insert spaces every 4 digits
    setCardNum(sanitizedValue);
  };

  const handleClose = (e) => {
    if(e.target.id === 'container') onClose();
  };

  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'
    id = 'container'
    onClick={handleClose}>
        <section>
        <div className="py-20 mx-auto md:px-12 lg:px-20 max-w-7xl bg-gray-200">
            <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
                <div>
                <h2 className="text-4xl text-black text-center">Payment Details</h2>
                </div>
            </div>
            <form>
                <div className="mt-4 space-y-6">
                <div className="col-span-full">
                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="email">
                    Card Number
                    </label>
                    <input
                    value={cardNum}
                    onChange={handleChange}
                    type="cardNum"
                    maxLength="19"
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="0000 0000 0000 0000"
                    autoComplete="off"
                    />
                </div>
                <div className="col-span-full">
                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="password">
                    Card Name
                    </label>
                    <input
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    type="cardName"
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Hugo Lui"
                    autoComplete="off"
                    />
                </div>
                <div className="col-span-full">
                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="name">
                    Expiry Date
                    </label>
                    <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="month"
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="MM/YY"
                    autoComplete="off"
                    />
                </div>
                <div className="col-span-full">
                    <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="address">
                    Security Digits
                    </label>
                    <input
                    value={threeDigit}
                    onChange={(e) => setThreeDigit(e.target.value)}
                    type="threeDigit"
                    maxLength="3"
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="123"
                    autoComplete="off"
                    />
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
        </section>
    </div>
  );
}

export default Payment;
