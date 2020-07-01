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
   //'mongodb://localhost/classSearch',
   process.env.MONGODB_URI,
   {useNewUrlParser:true})

const db = mongoose.connection;
db.on('error',(x)=>console.log("connection error"+x))
db.once('open',(x)=>console.log("We connected at "+new Date()+x))

const authRouter = require('./routes/authentication');
app.use(authRouter)


app.set("view engine", "ejs");
app.set("port", process.env.PORT || 5500);
app.use(
  express.urlencoded({
    extended: false
  })
);



const isLoggedIn = authRouter.isLoggedIn

app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

const favsRouter = require('./routes/favs');
app.use('/favs', favsRouter);

app.get("/", stateController.showUSWithData);



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

app.get("/ma", stateController.showStateWithData);
app.get("/ca", stateController.showStateWithData);
app.get("/ny", stateController.showGenericStateWithData);
app.get("/ct", stateController.showGenericStateWithData);
app.get("/al", stateController.showGenericStateWithData);
app.get("/ak", stateController.showGenericStateWithData);
app.get("/wa", stateController.showGenericStateWithData);
app.get("/ar", stateController.showGenericStateWithData);
app.get("/az", stateController.showGenericStateWithData);
app.get("/co", stateController.showGenericStateWithData);
app.get("/de", stateController.showGenericStateWithData);
app.get("/fl", stateController.showGenericStateWithData);
app.get("/ga", stateController.showGenericStateWithData);
app.get("/hi", stateController.showGenericStateWithData);
app.get("/id", stateController.showGenericStateWithData);
app.get("/in", stateController.showGenericStateWithData);
app.get("/il", stateController.showGenericStateWithData);
app.get("/ia", stateController.showGenericStateWithData);
app.get("/KS", stateController.showGenericStateWithData);
app.get("/KY", stateController.showGenericStateWithData);
app.get("/LA", stateController.showGenericStateWithData);
app.get("/ME", stateController.showGenericStateWithData);
app.get("/MD", stateController.showGenericStateWithData);
app.get("/MI", stateController.showGenericStateWithData);
app.get("/MN", stateController.showGenericStateWithData);
app.get("/MS", stateController.showGenericStateWithData);
app.get("/MO", stateController.showGenericStateWithData);
app.get("/MT", stateController.showGenericStateWithData);
app.get("/NE", stateController.showGenericStateWithData);
app.get("/NV", stateController.showGenericStateWithData);
app.get("/NH", stateController.showGenericStateWithData);
app.get("/NJ", stateController.showGenericStateWithData);
app.get("/NM", stateController.showGenericStateWithData);
app.get("/NC", stateController.showGenericStateWithData);
app.get("/ND", stateController.showGenericStateWithData);
app.get("/OH", stateController.showGenericStateWithData);
app.get("/OK", stateController.showGenericStateWithData);
app.get("/OR", stateController.showGenericStateWithData);
app.get("/PA", stateController.showGenericStateWithData);
app.get("/RI", stateController.showGenericStateWithData);
app.get("/SC", stateController.showGenericStateWithData);
app.get("/SD", stateController.showGenericStateWithData);
app.get("/TN", stateController.showGenericStateWithData);
app.get("/TX", stateController.showGenericStateWithData);
app.get("/UT", stateController.showGenericStateWithData);
app.get("/VT", stateController.showGenericStateWithData);
app.get("/VA", stateController.showGenericStateWithData);
app.get("/WA", stateController.showGenericStateWithData);
app.get("/WV", stateController.showGenericStateWithData);
app.get("/WI", stateController.showGenericStateWithData);
app.get("/WY", stateController.showGenericStateWithData);
app.get("/dc", stateController.showGenericStateWithData);

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
      let name = req.user.googlename
      let state = req.body.state
      let title = req.body.title
      let body = req.body.body
      let userId = req.user._id
      let date = new Date()
      let newPost = new Forum({name:name, state:state, title:title, body:body, date:date, userId:userId})
      await newPost.save()
      res.redirect('/showForum')
    }
    catch(e) {
      res.send("error in createPost")
    }
  })




app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// app.listen(app.get("port"), () => {
//   console.log(`Server running at http://localhost:${app.get("port")}`);
// });

module.exports = app;
