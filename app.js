const express = require('express');
const port = 3000;
const app = express();
app.get('/', (req, res) => {
   res.cookie("name", "Qaiser")
   res.send('Cookie is set');
    });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });