import express from 'express';
import { readTxt, readCsv } from '../utils/fileReaders';

const router = express.Router();

router.get('/txt', async (req, res, next) => {
  readTxt().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
});

router.get('/csv', async (req, res, next) => {
  readCsv().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
});

export default router;