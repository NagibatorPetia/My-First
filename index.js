const express = require('express');
const app = express();

app.use(express.static('.'));

const server = app.listen(8082,()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log('Listening to http://localhost:8082');
})

