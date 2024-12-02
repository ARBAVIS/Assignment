import { Link } from "react-router-dom"
import "./navbar.css"
function navbar(){
    return(
        <>
         <nav className="navbar">
            <div className="logo">
                <Link to="/dashboard">
                  <img  style={{height:45}} src="/images/jobringer_logo.jpeg" alt="logo"/>
                </Link>
            </div>
        
        
        <ul className="nav-links"> 
            <li>
                <Link to="/dashboard">Home</Link>
            </li>
            
           
            <li> 
                <Link to="/jobPost">
                 post job

                </Link>
            </li>
        </ul>



       
    

    </nav>
         </>
    )
}
export default navbar