import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ClassesPage from './ClassesPage';
import { Link } from "react-router-dom";

function CoachPage({email, name}) {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const [yourClasses, setClasses] = useState();
  useEffect(()=>{
    fetch("http://localhost:5000/get-coaches-name",{
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"name" : `${name}`})
    }).then((response)=>{
        if(response.ok){
          return response.json();
        }
      }).then((data)=>{
        setClasses(data.row[0]["classes"]);
        console.log(yourClasses)
      }).catch((error)=>{
        console.log(error)
      })
  },[])

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
                <button className='hover:bg-gray-200 hover:rounded-xl ' onClick={()=> navigate("../contact")}
                >Send Message</button>
                </>) : null}
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='text-4xl'>{yourClasses ? "You are teaching Class"+yourClasses : "You are not teaching any classes."}</div>
        </div>

        <div className='flex justify-center'>
            <div className='w-1/2 pt-10'>
                <ClassesPage isCoach={true}/>
            </div>
        </div>
    </section>
  );
}

export default CoachPage;
