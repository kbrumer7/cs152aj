/*
  todo.js -- Router for the ToDoList
*/
const express = require('express');
const router = express.Router();
const FavStates = require('../models/FavStates')


/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/login')
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
      res.redirect('/')
});

router.get('/remove/:itemId',
  isLoggedIn,
  async (req, res, next) => {
      console.log("inside /todo/remove/:itemId")
      await FavStates.remove({_id:req.params.itemId});
      res.redirect('/toDo')
});


// get the value associated to the key
router.get('/',
  isLoggedIn,
  async (req, res, next) => {
    console.log('in favs router')
      res.locals.items = await FavStates.find({userId:req.user._id})
      res.render('favStates');
});


module.exports = router;
