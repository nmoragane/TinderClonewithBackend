import express from 'express';
import mongoose from 'mongoose';

//App config
const app = express();
const port = process.env.PORT || 8001

//Middlewares

//DB config

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello genius!"))

//Listener
app.listen(port, () => console.log('listening on port ' + port))