import express from 'express'

const app = express();


app.get('/', (req, res) => {
	res.send('salut');
}

app.listen(3000, () => {
	console.log('on écoute le port 3000');
};
