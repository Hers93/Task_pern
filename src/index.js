const express = require('express');
const morgan =  require('morgan')
const app = express();
app.use(morgan('dev'))

app.listen(3000)
console.log('server port 3000')