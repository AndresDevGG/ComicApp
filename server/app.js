const express = require("express");
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get("/comic", async (req, res) => {
    try {
        const response = await axios.get("https://xkcd.com/info.0.json");
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al consumir el servicio" });
    }
});

app.listen(port, () => {
    console.log(`Server running in port ${port}...`);
});
