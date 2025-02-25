const express = require('express');
const port = 3000;
const app = express();
const bcrypt = require('bcrypt');
const myPlaintextPassword = 'password'; // = $2b$10$T.gk8Ygrw9eQnvSP/oYvMOLmJ3mT78XPg0W9x81DEtOsnxeVW9tOa
app.get('/', (req, res) => {
    bcrypt.compare(myPlaintextPassword, '$2b$10$T.SP/oYvMOLmJ3mT78XPg0W9x81DEtOsnxeVW9tOa', function(err, result) {
        if (result) {
            res.send('Password is correct');
        } else {
            res.send('Password is incorrect');
        }
    });
});

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });