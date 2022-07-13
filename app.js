const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Welcome to app Node, Express with Docker");
});

app.listen(PORT,()=>{
    console.log(`NodeWithDocker is running on PORT ${PORT}`);
});