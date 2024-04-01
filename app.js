import express from 'express';
import { programmingList } from './data/data.js';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <script src="/htmx.js" defer></script>
    </head>
    <body>
      <h1>Programming List</h1>
      <button hx-get="/info" hx-swap="outerHTML">show</button>     
    </body>
  </html>`);
});

app.get('/info', (req, res) => {
  res.send(`
    <ul>
      ${programmingList.map((programming) => `<li>${programming}</li>`)}
    </ul>
  `);
});

console.log('app running on http://localhost:3000');
app.listen(3000);
