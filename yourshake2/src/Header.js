import React from 'react'
import "./css/Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    let history = useHistory()

    const handleClick = () => {
        history.push('/login')
    }

    const[{cart, user}] = useStateValue()

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/" className="header__logo">
            <div className="header__logo">
                Your Shake <span className="header__logoInitials">YS</span>
            </div>
            </Link>

            <div className="header__nav">
                <div className="header__option">
                    Who We Are
                </div>

            <Link to="/products" className="header__option">
                <div className="header__option">
                    Products
                </div>
            </Link>

                <div className="header__option">
                    What Are Protein Supplements
                </div>
                <div className="header__option">
                    FDA Ingredient Advisory List
                </div>
                <div className="header__optionCart">
                    <ShoppingCartIcon/>
                </div>

                <Link to={!user && '/login'} className="header__btn">
                <button onClick={handleAuthentication}  className="header__btn btn_dark">{user ? 'Sign Out' : 'Sign In'}</button>
                </Link>

                {/* <div className="header__hidden">
                    
                    <button onClick={handleClick}className="btn_dark2"> Sign In</button>
                    
                    <p>My Account</p>
                   <p>Wait, what is YourShake?</p>
                </div> */}
            </div>
            
            
        </div>
    )
}

export default Header
