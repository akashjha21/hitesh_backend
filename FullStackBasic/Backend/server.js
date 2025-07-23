// const express = require('express'); if we want to use CommonJS syntax then we will use this line because in Common JS code works asynchronous
// but in ES6 we can use import syntax which is synchronous

// so at first if we will use this then running the server will give error so we have to write "type": "module" in package.json
import express from "express";

const app = express();

// app.use(express.static('dist')); // it is a middleware and it can be used when we do a BAD PRACTICE for saving the cost by doing npm run build in the frontend and then saving the build folder in the backend folder.
// By this if we will not run the backend server then the frontend will also work fine but the ONLY PROBLEM IS WHEN WE WILL DO ANY CHANGES IN THE FRONTEND THEN WE HAVE TO AGAIN DO npm run build in the frontend and then copy the build folder to the backend folder else the changes will not be reflected in the frontend.


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is Ready!");
});

// one of the way to use CORS is to use the url in a proper standardisation
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      content: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "joke 2",
      content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "joke 3",
      content: "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      id: 4,
      title: "joke 4",
      content: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 5,
      title: "joke 5",
      content: "Why did the bicycle fall over? Because it was two-tired!",
    },
  ];
  res.send(jokes);
});
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
