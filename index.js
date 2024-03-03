const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/views/home.html'));
})
router.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+'/views/about.html'));
})
router.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname+'/views/contact.html'));
})

app.use('/', router);

app.listen(process.env.PORT || 3000);
console.log('now running');
