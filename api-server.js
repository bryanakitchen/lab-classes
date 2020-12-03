const express = require('express');
const app = express();
const port = 3002;
const { Stack } = require('./stacks/stack');
const { stripInput } = require('./stacks/stack.js');


app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello world');
})

app.post('/lint', (req, res) => {
    const stack = new Stack();
    stripInput();

// need to return the response
    res.send(stack);
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})