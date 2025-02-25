const express = require('express');
const port = 3000;
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
   let token = jwt.sign({ email: "qaisers.off@exm.com" }, 'secret');
   res.cookie('token', token);
   res.send('Cookie is set');
});

app.get('/get', (req, res) => {
    let token = req.cookies.token;
    let decoded = jwt.verify(token, 'secret');
    res.send(decoded);
    // console.log(decoded);
}
);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });