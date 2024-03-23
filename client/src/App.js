import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import ClassesPage from './components/ClassesPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Navbar/>
      }/>
      <Route path="/login" element={
        <LoginPage/>
      }/>
      <Route path="/create-account" element={
        <CreateAccountPage/>
      }/>
      <Route path="/classes" element={
        <ClassesPage/>
      }/>
      <Route path="/home" element={
        <HomePage/>
      }/>
    </Routes>
  );
}

export default App;
