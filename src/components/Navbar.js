import  "../styles/Navbar.css"
import React from "react";
export default function Navbar(props) {
    const [change, setChange]=React.useState("")
    function handleClick(e){
        e.preventDefault();
        if(change){
            setChange("")
        }
        else(
        setChange("change")
        )
    }
    return(
        <div className="navbar">
            <h1>Acctble.</h1>
            <div className="nav-clickables">
            <h2 onClick={()=>props.setPage("home")}>Home</h2>
            <h2 onClick={()=>props.setPage("profile")}>Profile</h2>
            <h2 onClick={()=>props.setPage("settings")}>Settings</h2>
            </div>
            {change &&  <div className="nav-pop"></div>}
            <div className={`hamburger ${change}`} onClick={handleClick}>
            <div className={`bar1`}></div>
            <div className={`bar2`}></div>
            <div className={`bar3`}></div>
            </div>
            
        </div>
    )
}