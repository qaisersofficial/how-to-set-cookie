const express = require('express');
// const cookieParser = require('cookie-parser');
const port = 3000;
const app = express();

// app.use(cookieParser());

app.get('/', (req, res) => {
//    res.cookie("name", "Qaiser Ali")
   res.send('Cookie is set');
    });

    // app.get('/read', (req, res) => {
    //     console.log(req.cookies);
    //     res.send('Reading cookies from browser');
    //      });
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });