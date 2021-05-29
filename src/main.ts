import {readdirSync} from "fs";

import express from 'express';
import ejs from 'ejs';

import {indexPage} from './views/index';

const app = express();

const port = process.env.PORT || 3000;
const resourcesDirectory = process.env.RESOURCES || './public';

app.use(express.static(resourcesDirectory));

app.get('/', (req, res) => {
    const files = readdirSync(resourcesDirectory).filter(name => !name.startsWith('.'));
    res.send(ejs.render(indexPage, {files}));
});

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
