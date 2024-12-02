import { useState } from "react";
import { Form } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';

function postJob(){
    const style={
        textaline:"center"

    }
    const [title,setTitle]=useState("")
    const[company,setCompany]=useState("")
    const[location,setLocation]=useState("")
    const navigate=useNavigate()


    const newJobInfo={
        title:title,
        company:company,
        location:location
    }
    const onSubmit=(e)=>{
        e.preventDefault();
    
        fetch('http://localhost:3032/jobs',{
        method:"POST",
        headers: {
           "Content-type": "application/json"
       },
       body: JSON.stringify(newJobInfo),
        }
    
    ) 
    alert('job post Successful')
    navigate('/dashboard')
    
    }
    return(
    
        <> 
        <h1>Post a Job</h1>
        <form  onSubmit={onSubmit}>
            <div className="jobpost" style={{style}}>
            <div>
            <label htmlFor="jobTitle"> job Title:</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter the Job Title" name="jobTitle"/>
            </div>
            <div>
            <label htmlFor="company">Company:</label>
            <input value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Enter the company name" name="company"/>
            </div>
            <div>
            <label htmlFor="location"> job Title:</label>
            <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="Enter the location" name="location"/>
            </div>
            <button>post a job</button>
            
            </div>
            
            
        </form>
        </>

    )
}
export default postJob;
 