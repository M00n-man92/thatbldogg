import './register.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const subbmitHandler = async (e) => {

        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("http://localhost:5000/api/join/register", {
                username, email, password

            })
            console.log(res)
            res.data && window.location.replace("/login")
        }
        catch (e) { console.log(e) }
        setError(true)

    }
    return (
        <div className="Register">
            <div className="registertitle">Register</div>
            <form className="registerform" onSubmit={subbmitHandler}>
                <label >UserName</label>
                <input type="text" placeholder="User, yeah you" onChange={e => setUsername(e.target.value)} />

                <label >Email</label>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <label >Password</label>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button className="submitform">Register</button>
                {error && <span className="spann"> email taken </span>}
            </form>
            <h5>OR</h5>
            <button className="login" type="submit" ><Link to='/login' className='link'>Login</Link> </button>

        </div>
    )
}
