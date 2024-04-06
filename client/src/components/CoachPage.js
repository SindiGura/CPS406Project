import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ClassesPage from './ClassesPage';

function CoachPage({email, name}) {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

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
                </>) : null}
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='text-4xl'>Your Classes</div>
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
