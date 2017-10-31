const express = require("express");
const app = express();
app.set("view engine", "pug");
app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});
app.use(express.static("public"));
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
