import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DoneIcon from '@mui/icons-material/Done';


function Login({setLogin, email, setEmail}) {
  // let [email,setEmail] = useState('');
  let [password,setPassword]= useState('');
  let [message,setMessage] = useState('');
//  console.log(email,password);
async function handleSubmit(event){
  if(event){
    event.preventDefault();
  }
    console.log(email);
    let res= await axios.post('http://localhost:4000/users/login',
    {email:email,password:password});
         console.log(res);
        if(res.data.statuscode===200){setMessage('Login successful');
      setLogin("True");}
        else if(res.data.statuscode===404){setMessage('Verify your account to Login')}
        else if(res.data.statuscode===408){setMessage('Invalid user')}
        else if(res.data.statuscode===400){setMessage('Invalid password')}
    }
    
  return <>
  <div className="container">
   <div className="form-container">
      <h3 style={{color:'rgb(238, 179, 29)'}}>Login</h3>
      <form>
        <div className='from-item'>
        <i class="fa-solid fa-circle-arrow-right"></i>
        <label htmlFor='email'>Email</label>
        <br></br>
        <input type='email' placeholder='Enter Email' onChange={(b)=>setEmail(b.target.value)}/>
        </div>
        <div className='from-item'>
        <label htmlFor='password'>Password</label>
        <br></br>
        <input type='password' placeholder='Enter Password' onChange={(b)=>{setPassword(b.target.value)}}/>
        </div>
      <button type='submit' className='form-button' onClick={handleSubmit}>Login</button>
      </form>
      <Link to='/forgotpassword' style={{color:'green'}}>ForgotPassword</Link>
      
      

      {message == "Login successful" ? 
      (<>
      <h4 style={{color:'green'}}>{message}<DoneIcon/></h4>
      
      <Link to='/markdown' style={{color:'violet'}}>
        <strong>Markdown Viewer</strong>
        <ArrowCircleRightIcon/>
        </Link> 
      </>) 
      : <><h3 style={{color:'red'}}>{message}</h3></>}
    </div>
        
    </div>
    </>
}

export default Login
