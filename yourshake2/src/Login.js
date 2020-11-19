import React, {useState} from 'react';
import "./css/Login.css"
import {Link,useHistory} from "react-router-dom"
import {auth} from "./firebase"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


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
            <div className="login__container">
   
            <div className="login__left bg_dark">
               {/* <div className="about__icon">
                    <Link to="/">
                        <span className="about__iconX">
                            <HighlightOffIcon/>
                        </span>
                    </Link>
                </div> */}
                <h1>Sign in</h1>
                <p>New user? <Link to="/register" className="login__createLink"><span className="login__createLink">Create an account</span></Link></p>

                <form className="login__form">
                    
                    <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email} />  
                    
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}  /> 

                    <input className="login__checkbox" type="checkbox"/> Keep me signed in

                    <button  type="submit" onClick={signIn} className="login__signInButton btn_light">Sign In</button> 
                </form>

                {/* <div className="login__social">
                    <p className= "login__socialTitle"> Or Sign In With</p>
                    <Icon className="fab fa-google icon" />
                    <Icon className="fab fa-facebook icon" />
                    <Icon className="fab fa-twitter icon" />
                </div> */}
            </div>
          
            {/* leave page icon */}
            <div className="login__right">
                <PersonOutlineIcon style={{ fontSize: 175 }} />
            </div>
            </div>
        </div>

        
   
        
    )
}

export default Login
