import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`<html><body>Hello World</body></html>`);
});

console.log('app running on http://localhost:3000');
app.listen(3000);
