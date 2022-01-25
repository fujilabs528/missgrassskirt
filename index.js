const express = require("express")
const cors= require("cors")
require("dotenv").config({ path: "./.env"})
const createCheckoutSession= require("./api/checkout")

const app = express()
const port = process.env.PORT || 80

app.use(express.json())
app.use(cors({origin: true}))

app.get("/", (req, res) => res.send("Hello xxxyyy"))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'react-ecommerce/public/index.html'));
});

app.post("/create-checkout-session", createCheckoutSession)

app.listen(port, () => console.log("xxx server listening xxxyyy", port))



// change web app to actual url once deployed? dotenv