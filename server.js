process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config();
const config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    appInitiator = require('./config/init/app.init');
const db = mongoose(),
    app = express();

require('./config/passport')();
appInitiator.initApp()
    .then(() => {
        app.listen(config.port);
        console.log(`${process.env.NODE_ENV} server running at http://${config.host}:${config.port}`);
    }).catch((err) => {
    console.error(err);
});

module.exports = app;
