import express from 'express';
import signale from 'signale';
import CheeseRouter from './cheese/infrastructure/routes';
import morgan from 'morgan';
import cors from 'cors';
import https from 'https';
import fs from 'fs';

const port = process.env.PORT || 3001;
const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(morgan("dev"));

app.use(cors({
    origin: "https://zifra.com.mx",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "PREFLIGHT"],
    credentials: true,
}));

app.use('/cheese', CheeseRouter);

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/tu-dominio.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/tu-dominio.com/fullchain.pem')
};

https.createServer(options, app).listen(port, () => {
    signale.success(`HTTPS Server running on port ${port}`);
});