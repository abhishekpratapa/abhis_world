import express from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(`${__dirname}/build`));

app.listen(port, () => console.log(`Listening on port ${port}`));
