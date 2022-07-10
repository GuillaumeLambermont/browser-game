const express = require("express");
const app = express();

app.use((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>Hey there, Welcome guys!! </h1></body></html>");
});

app.listen(3000, function(){
    console.log("Server is running at port 3000");
});