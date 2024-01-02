const test = require('../controller/testController');

module.exports = function (app) {
    //app.get(), app.post() ...
    app.get('/test', test.dbTest);
}