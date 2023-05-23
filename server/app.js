const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the app!');
});

const port = 5000;
app.listen(port, () => console.log(`server is listening on port ${port}.`));
