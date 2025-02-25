const express = require('express');
const port = 3000;
const app = express();
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => {
   let token = jwt.sign({ email: "qaisers.off@exm.com" }, 'secret');
   console.log(token);
});

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });