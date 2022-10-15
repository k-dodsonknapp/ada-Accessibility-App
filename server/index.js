const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "hello ADA crew!!" });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
