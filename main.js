"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  stateController = require("./controllers/stateController"),
  layouts = require("express-ejs-layouts");

const Contact =require("./models/Contact")
const Forum = require("./models/Forum")

const mongoose = require("mongoose");
mongoose.connect(
   'mongodb://localhost/classSearch',
   {useNewUrlParser:true})

const db = mongoose.connection;
db.on('error',(x)=>console.log("connection error"+x))
db.once('open',(x)=>console.log("We connected at "+new Date()+x))

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/forum", (req, res) => {
  res.render("forum");
});

app.get("/createPost", (req, res) => {
  res.render("createPost");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/kayla", (req, res) => {
  res.render("kayla");
});

app.get("/adam", (req, res) => {
  res.render("adam");
});

app.get("/jiale", (req, res) => {
  res.render("jiale");
});

app.get("/joseph", (req, res) => {
  res.render("joseph");
});

app.get("/belle", (req, res) => {
  res.render("belle");
});

app.get("/mass", (req, res) => {
  res.render("mass");
});

app.get("/contact", homeController.showSignUp);
app.get("/forum", homeController.showForum);


app.get("/showContacts",
   async (req,res) => {
     try {
       res.locals.contacts = await Contact.find({})
       //res.json(res.locals.contacts)
       res.render('showContacts')
     }
     catch(theError){
       console.log("Error:")
       res.send("There was an error in /showContacts!")

     }
   });

app.post('/contact',
  async (req,res) => {
    try {
      let name = req.body.name
      let email = req.body.email
      let newContact = new Contact({name:name, email:email})
      await newContact.save()
      res.redirect('/showContacts')
    }
    catch(e) {
      res.send("error in addContact")
    }
  })

 app.get("/showForum",
    async (req,res) => {
      try {
        res.locals.forum = await Forum.find({})
        //res.json(res.locals.contacts)
        res.render('forum')
      }
      catch(theError){
        console.log("Error:")
        res.send("There was an error in /showContacts!")

      }
    });

app.post('/showForum',
  async (req,res) => {
    try {
      let name = req.body.name
      let state = req.body.state
      let title = req.body.title
      let body = req.body.body
      let newPost = new Forum({name:name, state:state, title:title, body:body})
      await newPost.save()
      res.redirect('/showForum')
    }
    catch(e) {
      res.send("error in createPost")
    }
  })

/*Load State Pages with Data*/
//Maybe someday we can automate parts of this
app.get("/ny", stateController.showStateWithData);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
