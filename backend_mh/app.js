const express = require("express");
const PORT = 5000;
const usersRouter = require("./routes/users.js");
const recipesRouter = require("./routes/recipes.js");
const foodIntakeRouter = require("./routes/foodIntake.js");
const cookieParser = require("cookie-parser");

// Start an express server
const app = express();
// Gets body of requests for use in POST routes
app.use(express.json());
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);
app.use("/foodIntake", foodIntakeRouter);

app.get("/", (req, res) =>
  res.send(
    "Hello MealThings Team! You should request from either /users, /recipes or /foodIntake !"
  )
);

app.listen(PORT, () => console.log(`mealthings listening on port ${PORT}`));
