import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import ClassesPage from './components/ClassesPage';
import HomePage from './components/HomePage';
import Coach from './components/CoachPage';
import TreasurerPage from './components/TreasurerPage';
import { useState } from 'react';

function App() {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  
  const setUser = (email, name) =>{
    setEmail(email);
    setName(name);
  } 

  return (
    <Routes>
      <Route path="/" element={
        <Navbar/>
      }/>
      <Route path="/login" element={
        <LoginPage setUser={setUser}/>
      }/>
      <Route path="/create-account" element={
        <CreateAccountPage/>
      }/>
      <Route path="/classes" element={
        <ClassesPage />
      }/>
      <Route path="/home" element={
        <HomePage name={name} email={email} setUser={setUser}/>
      }/>
      <Route path="/coach" element={
        <Coach name={name} email={email}/>
      }/>
      <Route path="/treasurer" element={
        <TreasurerPage/>
      }/>
    </Routes>
  );
}

export default App;
