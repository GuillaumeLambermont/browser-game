const express = require("express")
require('dotenv').config();
const app = express();
const cors = require("cors");
const pool = require("./db");

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//get game data

app.get("/mainpage/:user_id", async(req, res) => {
    try {
        const { user_id } = req.params;
        const allData = await pool.query("SELECT * FROM game_data WHERE user_id = $1", [user_id]);
        res.json(allData.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(PORT, function(){
    console.log(`Server is running at port : ${PORT}`);
});