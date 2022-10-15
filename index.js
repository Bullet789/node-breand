const express = require('express');
const app = express();


app.use(require('./routes/products.routes.js'));
app.use(require('./routes/brends.routes.js'))



app.listen(4000, () => console.log('http://localhost:'));

