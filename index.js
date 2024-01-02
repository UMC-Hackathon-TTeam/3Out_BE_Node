const express = require('./config/express');
const port = 3000;
const app = express();

app.listen(port, () => {
    console.log('Server is running on HTTP at port', port);
});
