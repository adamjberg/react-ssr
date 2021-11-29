import express from "express";
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { App } from "../../client/src/App";

const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);

    const html = `
        <html lang="en">
        <head>
            <script src="app.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `
    res.send(html);
});

app.use(express.static("./built"));

app.listen(4242);