const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send(new Date().toISOString());
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});