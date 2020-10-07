import React, {useState} from 'react';
import "./css/Login.css"
import {Link,useHistory} from "react-router-dom"
import {auth} from "./firebase"


function Login() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    let history = useHistory()

    const signIn = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            console.log(auth)
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
   
            <div className="login__container bg_dark">
                <h1>Sign in</h1>
                <p>New user? <Link to="/register" className="login__createLink"><span className="login__createLink">Create an account</span></Link></p>

                <form>
                    
                    <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email} />  
                    
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}  /> 

                    <input type="checkbox"/> Keep me signed in

                    <button  type="submit" onClick={signIn} className="login__signInButton btn_light">Sign In</button> 
                </form>

            </div>
            {/* leave page icon */}
          
            {/* icon */}
        </div>

        
   
        
    )
}

export default Login
