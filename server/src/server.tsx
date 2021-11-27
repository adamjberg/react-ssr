import express from "express";
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { App } from "../../client/src/App";

const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);

    const indexFile = path.resolve('static/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err.message);
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static("./built"));

app.listen(4242);