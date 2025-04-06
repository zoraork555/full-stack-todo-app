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

let todos = [
    {id: 1, text: "Buy groceries", completed: false},
    {id: 2, text: "Laundry", completed: true},
    {id: 3, text: "Work out", completed: false},
    {id: 4, text: "Walk cat", completed: false}
];

let id = 4;

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res)=>{
    const todo = { id: ++id, text: req.body.text, completed: false };
    todos.push(todo);
    res.json(todo);
});

// app.get("/contact", (req, res) => {
//     res.send("Goodbye WORLD");
// });

app.listen(PORT, () =>{
    console.log(`working on port ${PORT}`);
})