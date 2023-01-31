import  "../styles/Navbar.css"
export default function Navbar(props) {
    return(
        <div className="navbar">
            <h1>Acctble.</h1>
            <div className="nav-clickables">
            <h2 onClick={()=>props.setPage("home")}>Home</h2>
            <h2 onClick={()=>props.setPage("profile")}>Profile</h2>
            <h2 onClick={()=>props.setPage("settings")}>Settings</h2>
            </div>
        </div>
    )
}