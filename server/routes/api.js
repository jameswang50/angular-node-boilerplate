const express = require('express');
const router = express.Router();


/* GET api listing. */


router.get('/', (req, res) => {
  res.send('Checking For NODE paths');
});


module.exports = router;