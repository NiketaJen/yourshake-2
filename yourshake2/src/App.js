import React, {useEffect} from 'react';
import './css/App.css';
import "./css/Utilities.css"
import Header from "./Header"
import Checkout from "./Checkout"
import Register from "./Register"
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';

function App() {
  const[{}, dispatch] = useStateValue()

  useEffect(() => {
    // will run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>...', authUser)

      if(authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
              <Register/>
            </Route>
          <Route path="/login">
              <Login/>
            </Route>
          <Route path="/checkout">
              <Header />
              <Checkout />
          </Route>
          <Route path= "/">
              <Header />
              {/* Home */}
              {/* Footer */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
