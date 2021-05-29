import {readdirSync, lstatSync, existsSync} from 'fs';
import {join} from 'path';

import express, {Request, Response} from 'express';
import ejs from 'ejs';

import {indexPage, ErrorPage} from './views';

const app = express();

const port = process.env.PORT || 3000;
const resourcesDirectory = process.env.RESOURCES || './public';

app.use(express.static(resourcesDirectory));

interface Element {
    path: string;
    name: string;
    type: 'file'|'directory'
}

const renderFilesList = (req: Request, res: Response) => {
    const {path} = req.params;
    const currentResourceDirectory = join(resourcesDirectory, path);
    let elements: Element[] = [];
    let parentDirectory = join(path, '..');

    if (existsSync(currentResourceDirectory)) {
        const elementNames = readdirSync(currentResourceDirectory).filter(name => !name.startsWith('.'));
        elements = elementNames.map(name => {
            const element = {
                path: join(path, name),
                name,
                type: 'file'
            } as Element;

            if (lstatSync(join(currentResourceDirectory, name)).isDirectory()) {
                element.type = 'directory';
            }
            return element;
        });
    } else {
        res.status(404);
        return res.send(ejs.render(ErrorPage, {error: 'HTTP 404 Not Found'}));
    }

    res.send(ejs.render(indexPage, {
        elements,
        isRoot: path === '',
        parentDirectory: parentDirectory === '.' ? '' : parentDirectory
    }));
}

app.get('/:path(*)', renderFilesList);

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
