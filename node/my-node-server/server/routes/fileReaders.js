import express from 'express';
import { readTxt, readCsv } from '../utils/fileReaders';
const router = express.Router();

/* GET data from .txt file */
router.get('/txt', async (req, res, next) => {
  readTxt().then((data) => {
    res.send(data);
  }).catch(() => {
    res.send('Error');
  });
});

/* GET data from .csv file */
router.get('/csv', async (req, res, next) => {
  readCsv().then((data) => {
    res.send(data);
  }).catch(() => {
    res.send('Error');
  });
});

export default router;