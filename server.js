const express = require('express')
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 10000;

app.use(bodyParser.json());
app.use('/', require('./routes'));
app.use('/contacts', require('./routes/contacts'));
app.use('/users', require('./routes/users'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, x-Requested-with, Content-Type, Accept, Z-Key');
    next();
}); 

mongodb.initDb((err) => {
 if(err) {
    console.log(err);
 }
 else {
    app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
 }
});

