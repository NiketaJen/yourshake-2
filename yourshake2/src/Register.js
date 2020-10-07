import React, {useState} from 'react';
import "./css/Register.css"
import {useHistory} from "react-router-dom"
import {auth, db} from "./firebase"

function Register() {
    const[displayName, setDisplayName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    let history = useHistory()

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        // .then(cred => {
        //     return db.collection('users').doc(cred.user.uid).set({
        //         displayName: displayName
        //     })
        // })
        .then(auth => {
            console.log(auth)
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        // firebase
    }
    return (
        <div className="register">
            <h1>register account page</h1>
            <div className="register__container bg_dark">
                <h1>Create an Account</h1>

                <form>
                    
                    <input type="text" placeholder="Username" name="displayName" onChange={e => setDisplayName(e.target.value)} value={displayName} />  

                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />  
                    
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} /> 


                    <button  type="submit" onClick={register} className="register__registerButton btn_light">Create Account</button> 
                </form>

            </div>
            {/* leave page icon */}
          
            {/* icon */}
        </div>
            
    )
}

export default Register
