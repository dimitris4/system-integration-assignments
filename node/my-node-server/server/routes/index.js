import express from 'express';
const router = express.Router();

router.get('/synchronizeTime', (req, res) => {
  console.log('test');
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-control": "no-cache",
    "Connection": "keep-alive"
  });
  setInterval(()=> {
    res.write(`data: ${new Date().toLocaleTimeString()} \n\n`)
  }, 1000)
})

router.get('/', function (req, res, next) {
  res.send('Welcome to my api!')
});

router.post('/', function (req, res, next) {
  res.send('Welcome to my api!')
});

export default router;