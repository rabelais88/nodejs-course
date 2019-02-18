const express = require('express');
const router = express.Router();

router.get('/routed', (req, res, next) => {
  res.render('response', { response: `you're routed!` });
  return next();
});

module.exports = router;