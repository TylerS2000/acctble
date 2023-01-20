import useField from '../hooks/useField'
import login from '../backend'

import '../styles/login.css'
export default function Login(){
    const username = useField('text')
    const password = useField('password')
    return (
        <div className='login-form'>
            <h1>Acctble</h1>
            <h2>Username</h2>
            <input type={username.type} value={username.value} onChange={username.onChange}/>
            <h2>Password</h2>
            <input type={password.type} value={password.value} onChange={password.onChange}/>
            <button className="submit-btn" onClick={async(event)=>{event.preventDefault(); await login({username:username.value, password:password.value}) }}>Submit</button>
        </div>
    )
}