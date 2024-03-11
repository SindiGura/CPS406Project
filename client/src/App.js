import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';

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
    </Routes>
  );
}

export default App;
