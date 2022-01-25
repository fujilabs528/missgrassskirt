const express = require("express")
const cors= require("cors")
require("dotenv").config({ path: "./.env"})
const createCheckoutSession= require("./api/checkout")

const app = express()
const port = process.env.PORT || 80
const path = require('path');

app.use(express.json())
app.use(cors({origin: true}))


app.use('/static', express.static(path.join(`${__dirname}/react-ecommerce/build`)));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/react-ecommerce/build/`));
  });



app.post("/create-checkout-session", createCheckoutSession)

app.listen(port, () => console.log("xxx server listening xxxyyy", port))



// change web app to actual url once deployed? dotenv