const express = require('express');
const port = 3000;
const app = express();
const bcrypt = require('bcrypt');
const myPlaintextPassword = 'password'; // = $2b$10$T.gk8Ygrw9eQnvSP/oYvMOLmJ3mT78XPg0W9x81DEtOsnxeVW9tOa
app.get('/', (req, res) => {
    res.send('Working');
});

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });