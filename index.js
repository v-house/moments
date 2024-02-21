const express = require("express");
const app = express();
const port = 3000;

const dataArray = [
  { id: 1, name: "Object 1", description: "Description for Object 1" },
  { id: 2, name: "Object 2", description: "Description for Object 2" },
  { id: 3, name: "Object 3", description: "Description for Object 3" },
];

app.get("/api/objects", (req, res) => {
  res.json(dataArray);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
