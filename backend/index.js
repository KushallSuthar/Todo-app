const express = require ('express');
const app = express();
const {createTodo} = require("./types");
const { updateTodo } = require('./types');
const {todo} = require('./db');
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
    // put it in mongo
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.findOne();
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    await todo.updateOne({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "todo updated as complete"
    });
});

app.listen(3000,() => {
    console.log('Server is running on port 3000');
});