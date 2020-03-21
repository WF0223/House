var axios = require('axios');
var qs = require('qs');

let req = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 10000
})