/*
  todo.js -- Router for the ToDoList
*/
const express = require('express');
const router = express.Router();
const FavStates = require('../models/FavStates')

const Forum = require('../models/forum')


/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/auth/google')
  }
}

/* add the value in the body to the list associated to the key */
router.post('/',
  isLoggedIn,
  async (req, res, next) => {
      const fav = new FavStates(
        {state: req.body.state,
        userId: req.user._id
        })
      await fav.save();
      res.redirect('/favs')
});

router.get('/remove/:itemId',
  isLoggedIn,
  async (req, res, next) => {
      console.log("inside /todo/remove/:itemId")
      await FavStates.remove({_id:req.params.itemId});
      res.redirect('/favs')
});


// get the value associated to the key
router.get('/',
  isLoggedIn,
  async (req, res, next) => {
    console.log('in favs router')
    res.locals.forum = await Forum.find({userId: req.user._id})
    console.log("forum="+res.locals.forum[0])
      res.locals.items = await FavStates.find({userId:req.user._id})
      res.render('favStates');
});



// router.get("/posts", async (req,res) => {
//     try {
//       res.locals.forum = await Forum.find({userId: req.user._id})
//       console.log("forum="+res.locals.forum[0])
//       res.render("favStates")
//     }
//     catch(theError){
//       console.log("Error:")
//       res.send("There was an error in /favStates!")
//     }
// });

module.exports = router;
