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
import Subheader from "./Subheader"
import Orders from "./Orders"
import Home from "./Home"
import Footer from "./Footer"
import About from "./About" 
import Info from "./Info" 
import Quiz from "./Quiz"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import StepContex from "./StepContex"
import Confirmation from './quiz/Confirmation';

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
              {/* <Footer/> */}
          </Route>
          <Route path="/products">
              <Header />
              <ProductContainer/>
              <Footer/>
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
          <Route path="/orders">
              <Header />
              <Orders/>
          </Route>
          <Route path="/confirmation">
              <Header />
              <Confirmation/>
              <Footer/>
          </Route>
          <Route path="/quiz">
              <StepContex>
              <Quiz/>
              </StepContex>
          </Route>
          <Route path="/info">
              <Header />
              <Info/>
              <Footer/>
          </Route>
          <Route path="/about">
              <Header />
              <About/>
              <Footer/>
          </Route>
          <Route path= "/">
              <Header />
              {/* <Subheader/> */}
              <Home/>
              <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
