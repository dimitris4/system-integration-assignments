import express from 'express';
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Welcome to my api!')
});

router.post('/', function (req, res, next) {
  res.send('Welcome to my api!')
});

export default router;