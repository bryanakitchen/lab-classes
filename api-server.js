const express = require('express');
const app = express();
const port = 3002;
const { Stack } = require('./stacks/stack');
const { stripInput } = require('./utils');

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello world');
})

app.post('/lint', (req, res) => {
    const stack = new Stack();
    const brackets = stripInput(req.body.lint);
    let result = true;

    brackets.forEach(bracket => {
        if(bracket === '{' || bracket === '[' || bracket === '(') {
            stack.push(bracket);
        } else {
            const top = stack.peek();
            if(top === '{' && bracket === '}') {
                stack.pop();
            } else if(top === '[' && bracket === ']') {
                stack.pop();
            } else if(top === '(' && bracket === ')') {
                stack.pop();
            } else {
                result = `missing ${bracket}`;
            };
        }
    }
    )
    res.send(result);
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})