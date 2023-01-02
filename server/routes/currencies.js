const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            name:'USD',
            value:1
        },
        {
            name:'EUR',
            value:2,
        }
    ])
})

module.exports = router;
