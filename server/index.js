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
        const fetchedData = await pool.query("SELECT * FROM game_data WHERE user_id = $1", [user_id]); 
        const elapsedTime = Date.now() - fetchedData.rows[0].last_updated;
        updatedData = fetchedData.rows[0];
        updatedData.food_qty = updatedData.food_qty + ( Math.floor((elapsedTime / 1000) * updatedData.food_prod));
        updatedData.wood_qty = updatedData.wood_qty + ( Math.floor((elapsedTime / 1000) * updatedData.wood_prod));
        updatedData.stone_qty = updatedData.stone_qty + ( Math.floor((elapsedTime / 1000) * updatedData.stone_prod));
        updatedData.iron_qty = updatedData.iron_qty + ( Math.floor((elapsedTime / 1000) * updatedData.iron_prod));
        const updateData = await pool.query("UPDATE game_data SET food_qty = $1, wood_qty = $2, stone_qty = $3, iron_qty = $4, last_updated = $5 WHERE user_id = 1234",
        [updatedData.food_qty, updatedData.wood_qty, updatedData.stone_qty, updatedData.iron_qty, Date.now()]);
        res.json(updatedData);
        
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(PORT, function(){
    console.log(`Server is running at port : ${PORT}`);
});