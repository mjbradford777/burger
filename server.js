const express = require('express');
const handlebars = require('express-handlebars');

let PORT = process.env.port || 8080;

let app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});