import express from "express";
const app = express();
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from "swagger-ui-express";
import axios from 'axios';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users API',
      version: '0.0.1',
    },
  },
  apis: ['./routers/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

console.log(openapiSpecification);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

import userRouter from "./routers/users.js";
import deviceRouter from "./routers/devices.js";

app.use(userRouter);
app.use(deviceRouter);

app.get("/", (req, res) => {
  res.send(new Date().toISOString());
});

app.get("/get-time", (req, res) => {
  getDate().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  }); 
});

app.get("/get-time", (req, res) => {
  getDate().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  }); 
});

const getDate = () => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:8005/`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});