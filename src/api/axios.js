var axios = require('axios');
var qs = require('qs');

let req = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 10000
})

// acc:账户  pwd:密码
export function login(acc,pwd){
    return req.post('/login.php',qs.stringify({acc:acc,pwd:pwd}))
}
export function Like(){
    return req.get('/gethouselist.php')
}