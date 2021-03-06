import {readdirSync, lstatSync, statSync, existsSync} from 'fs';
import {join} from 'path';

import express, {Request, Response} from 'express';
import ejs from 'ejs';

import {indexPage, ErrorPage} from './views';

const app = express();

const port = process.env.PORT || 3000;
const resourcesDirectory = process.env.RESOURCES || './public';
const baseUrl = process.env.BASE_URL || '/';

app.use(express.static(resourcesDirectory));

interface Element {
    path: string;
    name: string;
    type: 'file'|'directory',
    size: number
}

const renderFilesList = (req: Request, res: Response) => {
    const {path} = req.params;
    const currentResourceDirectory = join(resourcesDirectory, path);
    let elements: Element[] = [];
    let parentDirectory = join(path, '..');

    if (existsSync(currentResourceDirectory)) {
        const elementNames = readdirSync(currentResourceDirectory).filter((name: string) => !name.startsWith('.'));
        elements = elementNames.map(name => {
            const currentPath = join(currentResourceDirectory, name);
            const element = {
                path: join(path, name),
                name,
                type: 'directory'
            } as Element;

            if (lstatSync(currentPath).isFile()) {
                element.type = 'file';
                element.size = statSync(currentPath).size;
            }
            return element;
        });
    } else {
        res.status(404);
        return res.send(ejs.render(ErrorPage, {error: 'HTTP 404 Not Found'}));
    }

    res.send(ejs.render(indexPage, {
        baseUrl,
        elements,
        isRoot: path === '',
        parentDirectory: parentDirectory === '.' ? '' : parentDirectory
    }));
}

app.get('/:path(*)', renderFilesList);

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
