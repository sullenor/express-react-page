import express from 'express';
import engine from './react-engine';
const port = 3000;
const app = express();

engine(app);

app.get('/', (req, res) => {
  res.render('page', {
    title: 'demo',
    children: 'hello, world'
  });
});

app.listen(port, _ => console.log('listening %s', port));
