import React, { useState, useEffect } from 'react'
import "./css/Orders.css"
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order"

function Orders() {
    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders') //creats and adds orders collection to current user once purchase is placed 
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))  //snapshot saves and deletes items from database in realtime
        ))
    } else {
        setOrders([])
    }
  }, [user]);

    return (
        <div className="orders">
            <h1>Your Orders</h1>
        
            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        
        </div>
    )
}

export default Orders
