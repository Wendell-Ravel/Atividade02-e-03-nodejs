//requiring module
const express = require('express');

//Creating Express object
const app = express();

//Handling GET request 
app.get('/', (req, res) => {
    res.send('Uma mensagem ' + 'no server')
    res.end()
})

//PORT Number
const PORT = process.env.PORT || 5000;

//Server Setup
app.listen(PORT, console.log(
    'Server started on port ${PORT}'
));



