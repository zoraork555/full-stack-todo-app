// start using 'npm start' in server folder

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
 
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// initialize with dummy todos

let todos = [];
let id = 0;

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.post("/todos", (req, res)=>{
    const todo = { id: ++id, text: req.body.text, completed: false };
    todos.push(todo);
    res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
    todos = todos.filter((t) => t.id != req.params.id);
    res.json({message: "Todo Deleted"});
})

// app.get("/contact", (req, res) => {
//     res.send("Goodbye WORLD");
// });

app.listen(PORT, () =>{
    console.log(`working on port ${PORT}`);
})