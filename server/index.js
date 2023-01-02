const express = require('express');
const app = express();
const port = 3001;
const currencies = require('./routes/currencies')
const rates = require('./routes/rates')

app.use('/api/currencies', currencies);
app.use('/api/rates', rates);

app.get('/api', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
