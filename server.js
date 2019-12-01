import express from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
