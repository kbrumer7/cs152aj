var express = require("express");
var router  = express.Router();
var State = require("../models/state");


router.get("/", function(req, res){
    var noMatch = null;
    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Forum.find({name: regex}, function(err, ){
           if(err){
               console.log(err);
           } else {
              if(allState.length < 1) {
                  noMatch = "No State match that query, please try again.";
              }
              res.render("views/index");
           }
        });
    } else {
        // Get all campgrounds from DB
        Forum.find({}, function(err, allState){
           if(err){
               console.log(err);
           } else {
              res.render("views/index");
           }
        });
    }
});
