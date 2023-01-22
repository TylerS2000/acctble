export default function Home(props) {
    const user = props.user
    return(
        <div>
            <h1  style={{color:"white"}}>Welcome {user.username}</h1>
            <input type="text"></input>
        </div>
    )
}