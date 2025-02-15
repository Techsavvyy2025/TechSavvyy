require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

app.get("/data", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM your_table_name");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
