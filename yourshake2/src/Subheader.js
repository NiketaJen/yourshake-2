import React from 'react'
import "./css/Subheader.css"
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';
import {db} from "./firebase"

function Subheader() {
    const[{user}] = useStateValue()

    //const userName = db.collection("users").doc(user.uid).get().then(doc => `${doc.data().firstName}`)
 
    return (
        <div className="subheader">
            <div className="subheader__greeting">
                <span className="subheader_optionLineOne">Hello, {!user ? 'Guest' : user?.email}</span>
            </div>
            <div className="subheader__search">
                 <input 
                    className="subheader_searchInput"
                    type="text"/>
                    <SearchIcon className="subheader_searchIcon"
                    />
            </div>
            
        </div>
    )
};

export default Subheader
