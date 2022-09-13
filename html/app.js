import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.static('index.html'));

app.get('/message', (req, res) => {
    res.send({message: "Hello from Express"});
})

app.listen(3004, () => {

})