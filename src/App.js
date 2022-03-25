
import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Verification from './Components/Verification';
import ForgotPassword from './Components/ForgotPassword';
import Navbar from './Components/Navbar';
import Markdown from './Components/Markdown';
import Home from './Components/Home';


function App() {
const [login,setLogin] = useState('False');
const [email,setEmail] = useState("");

  return <>
 
  <BrowserRouter>
  <Navbar login={login} email={email}/>
  <Routes>
    {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login setLogin={setLogin} email={email} setEmail={setEmail}/>}/>
    <Route path='/verify' element={<Verification/>}/>
    <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    <Route path='/markdown' element={<Markdown/>}/>
    </Routes>
    </BrowserRouter>
 
 </>
}


export default App;
