var express = require("express");
var db = require("../models")

var router = express.Router();

router.get("/", function (req, res) {
  db.Burgers.findAll({}).then(function (dbBurgers) {
    res.render("index", {
      burger: dbBurgers
    })
    // res.json(dbBurgers)
  }).then(function (err) {
    console.log(err);
  })
});

router.post("/", function (req, res) {
  db.Burgers.create(req.body).then(function (dbBurgers) {
    res.redirect("/")
  })


});
router.put("/:id", function (req, res) {
  
  db.Burgers.update(
    {
       devoured: true
    },
    {
      where: {
        id: req.params.id
      }
  
    }).then(function (dbBurgers) {
        res.sendStatus(200);
    });

});


module.exports = router;