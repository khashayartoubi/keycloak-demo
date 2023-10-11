import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json())
app.use(cors())
app.use('/api/v1',routes)

app.listen(PORT, (req,res) => {
    console.log(`app is run on ${PORT}`);
}) 