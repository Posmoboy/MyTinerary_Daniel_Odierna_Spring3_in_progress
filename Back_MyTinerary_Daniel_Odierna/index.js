import ('dotenv/config.js')
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './src/app/route/indexRouter.js';
import citiesRouter  from './src/app/route/citiesRouter.js';
import './database.js'

//Settings

const app = express();
const port = 5173;
app.set('port', process.env.port || 5173);



//Midlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());




//Routes
app.use('/api',(indexRouter));
app.use('/api/cities',(citiesRouter));
app.use('/api/cities/city:nombre',(citiesRouter));


//Static files

//starting the server

app.listen(process.env['PORT'] || 5173, () => {
    console.log(`Server on port ${process.env['PORT']}`);
});