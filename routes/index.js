var express = require("express");
var router = express.Router();
let Recipe = require("../models/recipe");
const { body, validationResult } = require("express-validator");
var createError = require("http-errors");

/* GET home page. */
router.get("/", function (req, res, next) {
  let recipes;

  Recipe.find({}).then((foundRecipes) => {
    recipes = foundRecipes;
    console.log(recipes);
    res.render("index", { title: "Recipe book", items: recipes});
  });
});

router
  .route("/recipes/add")
  .get(function (req, res) {
    res.render("add_recipe", { difficultyLevels: ["Easy", "Medium", "Hard"]});
  })

.post(
  body("name", "Name is required").notEmpty(),
  body("description", "Description is required").notEmpty(),
  body("difficulty", "Difficulty is required").notEmpty(),
  body("ingredients", "At least one ingredient is required").notEmpty(),
  body("steps", "At least one step is required").notEmpty(),
  function (req, res) {
      const errors = validationResult(req);

      if (errors.isEmpty()) {
          let recipe = new Recipe();
          recipe.name = req.body.name;
          recipe.description = req.body.description;
          recipe.difficulty = req.body.difficulty;
          recipe.ingredients = req.body.ingredients.split(",").map(item => item.trim()); 
          recipe.steps = req.body.steps.split(",").map(item=> item.trim());
          recipe
              .save()
              .then(() => {
                  res.redirect("/");
              })
              .catch((error) => {
                  console.log(error);
                  return;
              });
      } else {
          res.render("add_recipe", {
              errors: errors.array(),
              difficultyLevels: ["Easy", "Medium", "Hard"],
          });
      }
  }
);


router
  .route("/recipes/edit/:id")
  .get(function (req, res) {
    var id = req.params.id;
    Recipe.findById({ _id: id }).then((foundRecipe) => {
      if (!foundRecipe) {
        return res.status(404).send("Recipe not found");
      }
      res.render("edit_recipe", { recipe: foundRecipe, difficultyLevels: ["Easy", "Medium", "Hard"]});
    });
  })
  .post((req, res) => {
    let recipe = {};
    recipe.name = req.body.name;
    recipe.description = req.body.description;
    recipe.difficulty = req.body.difficulty;
    recipe.ingredients = req.body.ingredients.split(",").map(item => item.trim()); 
    recipe.steps = req.body.steps.split(",").map(item=> item.trim());
    Recipe.updateOne({ _id: req.params.id }, recipe)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  });

router.route("/recipes/delete/:id").get(function (req, res) {
  var id = req.params.id;
  Recipe.deleteOne({ _id: id }).then(() => {
    res.redirect("/");
  });
});


module.exports = router;
