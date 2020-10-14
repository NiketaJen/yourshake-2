import React, {useState} from 'react';
import "./css/Register.css"
import {useHistory} from "react-router-dom"
import {auth, db} from "./firebase"

function Register() {
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    let history = useHistory()

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                firstName: firstName, 
                 lastName: lastName
            })
        })
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
            <div className="register__container bg_dark">
                <h1>Create an Account</h1>

                <form>
                    
                    <input type="text" placeholder="First Name" name="firstName" onChange={e => setFirstName(e.target.value)} value={firstName} /> 

                    <input type="text" placeholder="Last Name" name="lastName" onChange={e => setLastName(e.target.value)} value={lastName} /> 

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
