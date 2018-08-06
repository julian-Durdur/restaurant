import express from 'express'
import { connect } from './config/DB'
import volleyball from 'volleyball'
import { restRouter } from './api/index';

const { PORT } = process.env
const app = express();

connect();
app.use(volleyball)

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.use('/api', restRouter)

app.get('/', (req, res) => {
	res.send('salut');
});

app.listen(PORT, () => {
	console.log(`on écoute le port ${PORT}`);
});
