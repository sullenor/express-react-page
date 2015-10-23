import express from 'express';
import { join } from 'path';
import reactEngine from './react-engine';
const port = 3000;
const app = express();

app.set('views', join(__dirname, '../components'));
app.set('view engine', 'js');
app.engine('js', reactEngine);

app.get('/', (req, res) => {
  res.render('page', {
    title: 'demo',
    children: 'hello, world'
  });
});

app.listen(port, _ => console.log('listening %s', port));
