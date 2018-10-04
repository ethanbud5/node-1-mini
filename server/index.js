const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bc = require("./controllers/books_controller")

app.use(bodyParser.json());
app.use(express.static(__dirname+"../build"))

app.get("/api/books", bc.read);
app.post("/api/books", bc.create)
app.put("/api/books/:id", bc.update)
app.delete("/api/books/:id", bc.delete)

app.listen(4000,()=>{
    console.log("Server is listening!")
})