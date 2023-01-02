const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/', (req, res, next) => {
    const options = {
        method: 'GET',
        url: 'https://currencyapi-net.p.rapidapi.com/currencies',
        params: {output: 'JSON'},
        headers: {
            'X-RapidAPI-Key': 'ed32a94d53msh5a5df720f9452f5p126f25jsnba948925162d',
            'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com'
        }
    };
    axios.request(options).then(response => {
        if (response.data.currencies){
            console.log(Object.entries(response.data.currencies));
            res.json(Object.entries(response.data.currencies));
        }
        res.json([]);
    }).catch(error => {
        console.log(error);
    });
})

module.exports = router;
