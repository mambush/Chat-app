const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
     const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, firs_name: username},
        {headers: {"private-key": "7a969a62-44af-4c7b-8365-f74ba30e55d4"}}
     )
     return res.status(r.status).json(r.data)
  } catch (e) {
     return res.status(e.responce.status).json(e.responce.data);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);