// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    const { name, message } = req.query;
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});