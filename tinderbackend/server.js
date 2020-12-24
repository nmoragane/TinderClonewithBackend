import express from 'express';
import mongoose from 'mongoose';


//App config
const app = express();
const port = process.env.PORT || 8001
const password = 'pKPg8e4fjZPC7Vr';
const dbname = 'tinderdb'

const connection_url = `mongodb+srv://admin:${password}@cluster0.qdyhu.mongodb.net/${dbname}?retryWrites=true&w=majority`;

//Middlewares

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello genius!"))

//Listener
app.listen(port, () => console.log('listening on port ' + port))