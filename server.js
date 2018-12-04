const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "app")));
app.use("/lib", express.static(path.join(__dirname, "node_modules")));

app.listen(port, function() {
    console.log(`Express listening on port ${port}`);
});
