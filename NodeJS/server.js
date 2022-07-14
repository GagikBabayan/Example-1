const express = require("express");
const app = express();

app.get("/todos", (req, res) => {
  res.send(JSON.stringify(userTodos));
  res.end();
});

const todos = [
  { id: Math.random(), text: "Learn JS", icCompleted: false },
  { id: Math.random(), text: "Learn CSS", icCompleted: false },
  { id: Math.random(), text: "Learn HTML", icCompleted: false },
];



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
