import React from 'react'
import "./css/Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SimplePopover from "./SimplePopover"
import { Link, useHistory } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    let history = useHistory()

    const[{singleProduct}, dispatch] = useStateValue();

    const removeSingleProduct = () => {
        dispatch({
            type:'REMOVE_SINGLE_PRODUCT',
        })
    };

    // const handleClick = () => {
    //     history.push('/login')
    // };

    const[{cart, user}] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    };

    return (
        <div className="header">
            <Link to="/" className="header__logo" onClick={removeSingleProduct}>
                <div className="header__logo">
                    Your Shake <span className="header__logoInitials">YS</span>
                </div>
            </Link>

            <div className="header__nav">
                <Link to="/about" className="header__option" onClick={removeSingleProduct}>
                    <div className="header__option">
                        Who We Are
                    </div>
                </Link>

                <Link to="/products" className="header__option" onClick={removeSingleProduct}>
                    <div className="header__option">
                        Products
                    </div>
                </Link>

                <Link to="/info" className="header__option" onClick={removeSingleProduct}>
                    <div className="header__option">
                        What Are Protein Supplements
                    </div>
                </Link>
                
                <div className="header__option" onClick={removeSingleProduct}>
                    <a href="https://www.fda.gov/food/dietary-supplement-products-ingredients/dietary-supplement-ingredient-advisory-list"> FDA Ingredient Advisory List </a>
                </div>

                <Link to="/checkout" onClick={removeSingleProduct}>
                    <div className="header__optionCart">
                        <ShoppingCartIcon/>
                        <span className="header_optionLineTwo header_cartCount">
                                {cart?.length}</span>
                    </div>
                </Link>

                <Link to={!user && '/login'} className="header__btn" onClick={removeSingleProduct}>
                    <button onClick={handleAuthentication}  className="header__btn btn_dark">{user ? 'Sign Out' : 'Sign In'}</button>
                    {/* <SimplePopover/> */}
                </Link>

                {/* <div className="header__hidden">
                    
                    <button onClick={handleClick}className="btn_dark2"> Sign In</button>
                    
                    <p>My Account</p>
                   <p>Wait, what is YourShake?</p>
                </div> */}
            </div>
            
            
            
        </div>
    )
};

export default Header
