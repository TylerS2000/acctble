import React from 'react'
import useField from '../hooks/useField'
import login from '../services/login'

import '../styles/login.css'
export default function Login(props) {
    const [error, setError] = React.useState(null)
    const username = useField('text')
    const password = useField('password')
    const handleSubmit = (event) => {
        event.preventDefault()
        login({ username: username.value, password: password.value }, props.setUser, setError)
    }
    if (props.user) {
        props.setPage('home')
    }
    return (
        <div className='login-form'>
            <h1>Acctble.</h1>
            <h2>Username</h2>
            <input type={username.type} value={username.value} onChange={username.onChange} />
            <h2>Password</h2>
            <input type={password.type} value={password.value} onChange={password.onChange} />
            <h2 className='error'>{error}</h2>
            <button className="submit-btn" onClick={handleSubmit}>Login</button>
            <button className='submit-btn' onClick={() => props.setPage("create profile")}>Create Account</button>
        </div>
    )
}