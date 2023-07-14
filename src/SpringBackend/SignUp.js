import React, { useState } from 'react'
import axios from 'axios'
import './Backendcss/SignUp.css'
import { Link ,useNavigate} from 'react-router-dom';
import Login from './Login';
import { toast } from 'react-toastify';


const SignUp = () => {
    const[name ,setname]=useState("");
    const[email ,setemail]=useState("");
    const[password,setpassword]=useState('');
    const[repassword , Resetpassword]=useState('');
    const [ error ,seterror]=useState('');
    const navigate = useNavigate();
 

    const handleSubmit = async(e)=>{
     
e.preventDefault();

if (!name & name<10 || !email || !password ||!repassword ) {
  toast.error("please enter valid data");
    return;
  }
  if (password !== repassword) {
    toast.error("Passwords do not match. Please enter the same password.");
    return;
  }

  
//   if {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     seterror("Please enter a valid email");
//   } 
// }
 
try {
    const response = await axios.post("http://localhost:8080/name/save",{ 
       name ,
       email,
       password,
      repassword});
      
    console.log(response.data);
    
    toast.success("Sign Up Successfully COmpleted")
    navigate('/login');

} catch (error) {
  toast.success("Please try again")
}




    }
  return (
<div  className='signup'>

<div className='formsignup'>
<h2 className='h2signup'> sign up</h2>
<div className='InputSignup'>

 <label>Username</label>
 <input className='Inputsi' type='text' placeholder='username' value={name} onChange={(e)=>setname(e.target.value)}/>

<lable>Email</lable>
  <input className='Inputsi' type='email' placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>

<label>Password</label>
  <input className='Inputsi' type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
  <label>Re-Password</label>
  <input className='Inputsi' type='password' placeholder='Re-password' value={repassword} onChange={(e)=>Resetpassword(e.target.value)}/>
  <div><button  className='btnsignup' type='submit' onClick={handleSubmit}>SignUp</button></div> 

  <p className="btnlink">Have already an account? <a href="#!"
                   ><u>  <Link   to={'/Login'}>Login here</Link></u></a></p>
                   
  </div>


  
 <div style={{color:"red"}}>{error && <p>{error}</p>}</div>
 </div>
</div>
  )
}

export default SignUp