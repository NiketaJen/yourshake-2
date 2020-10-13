const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51HaQvdHz6uqE0kpwguefnDEu4wDexHWBw50AP2mn3owU6Y4t5xWJKFBqW8TnfNhsceV3nKweeJGZO005NITYvyOH001seQHvMu')

//API

//API config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world') )

app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log('Payment request received BOOM!!', total)
})

//listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/yourshake-fe77e/us-central1/api