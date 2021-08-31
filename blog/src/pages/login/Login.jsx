import './login.css'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div className="Register">
        <div className="logintitle">SignIn</div>
        <form  className="registerform">
        

            <label >Email</label>
            <input type="email" placeholder="Email" />
            <label >Password</label>
            <input type="password" placeholder="Password" />
            <button className="submitform">SignIn</button>
        </form>
        <h5>OR</h5>
        <button className="register"><Link to='/register' className="link"> Register</Link></button>
    </div>
    )
}
