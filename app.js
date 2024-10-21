const express = require("express")
const mongoose = require("mongoose") 
require('dotenv').config()
const bookRoutes = require("./routes/bookRoutes")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
// connection DB
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch((err) => console.log(err))

// def of routes
app.use('/books', bookRoutes)

// start the server
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})