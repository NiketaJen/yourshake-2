import React, {useEffect} from 'react';
import './css/App.css';
import "./css/Utilities.css"
import Header from "./Header"
import Checkout from "./Checkout"
import Register from "./Register"
import Login from "./Login"
import ProductContainer from "./ProductContainer"
import SingleProductContainer from "./SingleProductContainer"
import Payment from "./Payment"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe(
  'pk_test_51HaQvdHz6uqE0kpwb045mDab5s8ii1EqqtjGC3R1cjj5WYBHG7Ldd3s4h44WxGRKSM1hpzXMw49mw9HfcihGi1mH00ZfG1OYiZ'
  );

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
          <Route path="/products/:id">
              <Header />
              <SingleProductContainer/>
          </Route>
          <Route path="/products">
              <Header />
              <ProductContainer/>
          </Route>
          <Route path="/register">
              <Register/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
              <Payment/>
              </Elements>
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
