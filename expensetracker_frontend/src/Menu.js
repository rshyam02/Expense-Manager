import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './Menu.css'

// import {Add_Note} from './Add_Note.js'
// import {Update_Note} from './Update_note.js'
// import {View_Note} from './View_Note.js'
// import {Delete_Note} from './Delete_Note.js'
//import hamImage from 'C:/my-project/client/frontend/src/images (7) (1).png'
import { useLocation } from 'react-router-dom';
 
 
const Menu=({name,pass})=>{
    //const navigateprofile= useNavigate();
    console.log(name,pass);
    const[sidebarstatus,setsidebarstatus]=useState(false);
 
    const togglesidebar=()=>{
        setsidebarstatus(!sidebarstatus);
    }
    // const [totaltasks,settotaltasks]=useState();
    // const [completedtasks,setcompletedtasks]=useState();
    // const [pendingtasks,setpendingtasks]=useState();
    // const [high_prioritytasks,sethightprioritytasks]=useState();
    // const [low_prioritytasks,setlowprioritytasks]=useState();
    
    
 
   
   
    // const location=useLocation();
    // const {name}=location.state ||{};
    return(
        <div>
            <div className="Menudiv">
            {/* <button class="hamburger_icon" onClick={togglesidebar}><img class="hamimage"src="hamnurger_icon.png" alt="="></img></button> */}
 
            {/* <button className="opensidebar" onClick={opensidebar()}></button>
            <script>
                function opensidebar {
 
                }
            </script> */}
           
                <button className="hamburger_icon" onClick={togglesidebar}><img className="hamimage" src="hamburger-icon.png" alt="="/></button>
 
                <div  className={`sidebar ${sidebarstatus ? "open": ""}`}>
 
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ul>
                        <li><a href="#"><Link to='/Dashboard' className="Dashboard" style={{display:'flex', alignItems:'center'}}><img className="dashbord-icon" src="Media (2).png" alt="dashboard" style={{width:'25px', height:'25px'}} />Dashboard</Link></a></li>
						<li><a href="#"><Link to='/Expenses' className="Expenses">Expenses</Link></a></li>
                        <li><a href="#"><Link to='/CreateExpense'>CreateExpense </Link></a></li>
                        
                    </ul>
                </div>
                {/* <script>
                    function togglesidebar() {
                        var sidebar=document.getElementsByClassName("sidebar");
                        var hamburger=document.getElementsByClassName("hamburger_icon");
                       
                    }
                   
                </script> */}
                {/* <div className={`content ${sidebarstatus ? "shifted": ""}`}>
                    <h1>Welcome to My Website</h1>
                   
                </div> */}
               
            </div>
           
           
 
        </div>
       
        // <nav className="menu">
        //     <ul>
   
        //         <li>
        //             <Link to='/Profile'>Profile</Link>
        //         </li>
        //         <li>
        //             <Link to="/Settings">Settings</Link>
        //         </li>
        //         <li>
        //             <Link to="/About">About</Link>
        //         </li>
        //         <li>
        //             <Link to="/Contact">Contact</Link>
        //         </li>
        //         <li>
        //             <Link to="/Logout">Logout</Link>
        //         </li>
        //     </ul>
        // </nav>
 
    )
}
export default Menu;