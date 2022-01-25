const express = require("express")
const cors= require("cors")
require("dotenv").config({ path: "./.env"})
const createCheckoutSession= require("./api/checkout")

const app = express()
const port = 80

app.use(express.json())
app.use(cors({origin: true}))

app.get("/", (req, res) => res.send("Hello xxxyyy"))

app.post("/create-checkout-session", createCheckoutSession)

app.listen(port, () => console.log("xxx server listening xxxyyy", port))



// change web app to actual url once deployed? dotenv