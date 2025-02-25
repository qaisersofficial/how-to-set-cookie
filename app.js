const express = require('express');
const port = 3000;
const app = express();
const bcrypt = require('bcrypt');
const myPlaintextPassword = 'password';
const someOtherPlaintextPassword = 'not_password';
const saltRounds = 10;
app.get('/', (req, res) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
            console.log(hash);
        });
    });
});

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });