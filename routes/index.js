const router = require('express').Router();
router.get('/', (req, res) => {
    //#swagger.tags = ['Hello World']
    res.send('Hello world');
});

router.use('/users', require('./users'));
router.use('/contacts', require('./contacts')); 

router.use('/api-docs', require('./swagger'));




module.exports = router;