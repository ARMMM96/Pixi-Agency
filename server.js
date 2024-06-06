const express = require("express");
const path = require("path");
const app = express();
const productRoutes = require("./routes/products");
const methodOverride = require("method-override");
const colors = require("colors");
require("dotenv").config();

app.use(express.json());

app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));



app.use("/products", productRoutes);

app.use("/", (req, res) => {
  res.status(404).render('index');
});


app.all("*", (req, res) => {
  res.status(404).send({
    apisStatus: false,
    message: "Invalid URL",
    data: {},
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`.bold.brightBlue.underline)
);
