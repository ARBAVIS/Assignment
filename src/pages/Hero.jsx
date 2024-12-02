import { useEffect, useState } from "react";
import "./Hero.css"
function Hero(){
    const [job_title,setJobTitle]=useState("")
    const [job_location,setJobLocation]=useState("")
    const[jobs,setJobs]=useState([]);

   useEffect(()=>{
    fetch('http://localhost:3032/jobs').then((res)=>res.json()).then((json)=>{
      setJobs(json);
    })
  },[])

   
    
      
    return(
        <>
         <section className="hero">
            <h1>Find Your Perfect Job</h1>
            <div className="search-bar">
                <input  value={job_title}  onChange={(e)=>setJobTitle(e.target.value)} type="text" placeholder="What? (Job Title, keywords)"  />
                <input  value={job_location} onChange={(e)=>setJobLocation(e.target.value)} type="text" placeholder="where? (Location)"/>
                

            </div>
        </section>
        <section className="job-list">
        <h2>Job Openings</h2>
                
                <div className="job-cards">
                   
                   {jobs.filter((x)=>{
            if(!job_title&!job_location){
                return true;
            }
            else{
                return(
                    x.title.toLowerCase().includes(job_title.toLowerCase())&
                    x.location.toLowerCase().includes(job_location.toLowerCase())

                )
            }
        }).map((job) => (
                        <div key={job.id} className="job-card">
                            <h3>{job.title}</h3>
                             <p>{job.company}</p>
                             <p>{job.location}</p>
                             <button>Apply</button>
                       </div>
                    ))}
                </div>
            </section>
        </>
        
            

        
    )
    
}
export default Hero