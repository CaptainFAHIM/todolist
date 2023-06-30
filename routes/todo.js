const router = require("express").Router();
const Todo = require("../models/Todo");

//routes
router.post("/add/todo", (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({
        todo
    });
    // save to databse
    newTodo.save()
    .then(()=> {
        console.log("Successfullt added!");
        res.redirect("/");
    })
    .catch(err => console.log(err.message));
    
});
router.get("/delete/todo/:_id", (req, res) => {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Successfully deleted!");
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err.message);
    });
});

module.exports = router;