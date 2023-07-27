import express from "express";
import colors from "colors";

//rest object
const app = express();

//rest api
app.get('/', (req,res) => {
    res.send("<h1>welcome to ecommerce app</h1>")
})

//port
const PORT = 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.bgCyan.white);
})