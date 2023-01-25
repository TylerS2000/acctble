import  "../styles/Navbar.css"
export default function Navbar(props) {
    return(
        <div className="navbar">
            <h1>Acctble.</h1>
            <div className="nav-clickables">
            <h2 onClick={()=>props.setPage("home")}>Home</h2>
            <h2>Profile</h2>
            <h2 onClick={()=>{localStorage.clear();props.setUser(null); props.setPage("login")}}>Logout</h2>
            </div>
        </div>
    )
}