const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const routes = require("./routes/index");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", routes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
