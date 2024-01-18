import express from 'express';
import messageRouter from "./Routers/messages";

const app = express();
const port = 8000;

app.use(express.json());

app.use('/messages', messageRouter);

const run = async () => {
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};

void run ();

