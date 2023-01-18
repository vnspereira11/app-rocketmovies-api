const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Hello, dev front-end em 2023!")
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));