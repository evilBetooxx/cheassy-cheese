import express from 'express';
import signale from 'signale';
import CheeseRouter from './cheese/infrastructure/routes';
import morgan from 'morgan';
import cors from 'cors';

const port = process.env.PORT || 6000;
const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(morgan("dev"));

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "PREFLIGHT"],
    credentials: true,
}));

app.use('/cheese', CheeseRouter);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});