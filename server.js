//Dependencies
const express = require("express")
//Create a new express application object
const app = express()
//Array for todos
const todos = []
//Middleware
app.use("/static", express.static("static"))
app.use(express.urlencoded({extended: true}))
//Routes
app.get("/test", (req,res)=> {
    res.send("Hello")
})
app.get("/", (req, res) => {
    res.render("index.ejs", {
        name: "John Doe",
        todos: todos
    })
})
app.post("/",(req, res) => {
    //Push new todo into array
    todos.push(req.body)
    // redirect back to main page (refresh page)
    res.redirect("/")
})


//Run the application so that it listens on port 4444
app.listen(4444, () => {
    console.log("Server is runnng o port 4444")
}) 