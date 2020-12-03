const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})