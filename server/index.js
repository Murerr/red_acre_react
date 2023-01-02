const express = require('express');
const app = express();
const port = 3001;
const currencies = require('./routes/currencies')

app.use('/api/currencies', currencies);

app.get('/api', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
