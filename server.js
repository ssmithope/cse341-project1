const express = require('express')

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 10000;

app.use('/', require('./routes'));
app.use('/contacts', require('./routes/contacts'));
app.use('/users', require('./routes/users'));


mongodb.initDb((err) => {
 if(err) {
    console.log(err);
 }
 else {
    app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
 }
});

