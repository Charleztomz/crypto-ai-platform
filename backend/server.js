const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Get AI signals
app.get("/api/signals", async (req, res) => {
  const response = await axios.get("http://localhost:8000/predict");
  res.json(response.data);
});

app.listen(5000, () => console.log("Backend running"));