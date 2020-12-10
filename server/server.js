const path = require('path');
const express = require('express');
const app = express();
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const React = require('react');
const { default: App } = require('../src/App');
const { createStore } = require('redux');
const { rootReducer } = require('../src/store/rootReducer');
const { Provider } = require('react-redux');
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    const store = createStore(rootReducer);
    const app = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});