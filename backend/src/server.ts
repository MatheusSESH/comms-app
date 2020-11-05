import express from 'express';

const app = express();
app.use(express.json());

app.get('/try', (request, response) => {
    console.log('Hello World!');
    return response.send("Hello World!");
});

app.listen(3333);

