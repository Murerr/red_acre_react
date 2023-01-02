const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/:base?', (req, res, next) => {
    const axios = require("axios");
    const base = req.params.base ? req.params.base : 'USD';
    const options = {
        method: 'GET',
        url: 'https://currencyapi-net.p.rapidapi.com/rates',
        params: {output: 'JSON', base: base},
        headers: {
            'X-RapidAPI-Key': 'ed32a94d53msh5a5df720f9452f5p126f25jsnba948925162d',
            'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        if (response.data.rates){
            console.log(Object.entries(response.data.rates));
            res.json(Object.entries(response.data.rates));
        }
        res.json([]);
    }).catch(function (error) {
        console.error(error);
    });
})

module.exports = router;
