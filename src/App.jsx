import { useState } from 'react'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import "./App.css"


function App() {
  const[email, setEmail]=useState('');
  const[password,setPassword]=useState('')
  const[prevE,setPrevE]=useState('')
  const navigate=useNavigate()
  
  const[newE,setNewE]=useState('');
  const[newP,setNewP]=useState('');

  const newData={
    email:newE,
    password:newP
  }

  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3031/data').then((res)=>res.json()).then((json)=>{
      setData(json);
    })
  },[])
 
  const showPage=()=>{
    setIsVisible(true);
  }
  const offPage=()=>{
    setIsVisible(false)
  }
  
  const ErrorShow=()=>{
    let isValid=true;
    if(!email && !password){
      setPrevE('Enter Your Email And Password')
      
      isValid =false;
    }
    else{
      setPrevE('')
    }
    return isValid;
  }
  const onSumit=(e)=>{
    e.preventDefault();
    if(ErrorShow()){
      const user=data.find((x)=>x.email===email && x.password===password)
      if(user){
        alert('Login successful')
        navigate('/dashboard')
       

      }
      else{
        alert('invalid input')
      }
    }
   
    
    
  

    
    
    
  }



  return (
    <>
    <div className='container'>
      <div className='page_section'>
        <div className='top_section'>
        <img src="/images/jobringer_logo.jpeg" alt="logo" width={'auto'}  height={'50px'}/>
        <button className='sing_btn' onClick={showPage}>Sing In</button>
        
         
        </div>
        <div className='registation_section'>
        <p> <h2 style={{textAlign:'center',color:"yellow"}}>Employers</h2>
        <h3 style={{color:"white"}}>Register & Start Hiring for Free in just 5 minutes <b style={{color:'#FF9933'}}>REGISTRATION JOB POSTINGAPPLICANT RESPONSE</b></h3></p>
        <div className='form_section'>
        <form onSubmit={onSumit}>
        
            
        <div >
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control' placeholder='Enter Email' />
          <p ></p>
        </div>
        <div >
        <input  value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control' placeholder='Enter Password' />
        <p></p>
        </div>
        <button type='submit'>Log In</button>
      

  </form>
        </div>
        </div>
        
       
        
        
      </div>
      
    </div>
      
    </>
  )
}

export default App
