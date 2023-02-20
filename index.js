const express = require('express');
const app = express();

app.use(bodyParser);

app.listen (8080, () => {
    console.log('Server has been started on 8080!');
})