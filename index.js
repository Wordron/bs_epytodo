require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

let date = new Date();
let day = ("0" + date.getDate(date)).slice(-2);
let month = ("0" + (date.getMonth(date) + 1)).slice(-2);
let year = date.getFullYear(date);

app.get("/", function(req, res) {
    const msg = "Hello World !";
    const head_json = "{\n  \"msg\": ";
    const tail_json = "\n}\n";
    const head_html = "<p>";
    const tail_html = "</p>\n";
    const tail_text = "\n";
    res.send(head_json + msg + tail_json);
});

app.param("name", function(req, res, next, name) {
    req.name = name;
    next();
});

app.get("/name/:name", function(req, res) {
    const msg = "Hello " + req.name + " !";
    const head_json = "{\n  \"msg\": ";
    const tail_json = "\n}\n";
    const head_html = "<p>";
    const tail_html = "</p>\n";
    const tail_text = "\n";
    res.send(head_json + msg + tail_json);
});

app.get("/date", function(req, res) {
    const msg = year + "-" + month + "-" + day;
    const head_json = "{\n  \"msg\": ";
    const tail_json = "\n}\n";
    const head_html = "<p>";
    const tail_html = "</p>\n";
    const tail_text = "\n";
    res.send(head_json + msg + tail_json);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
