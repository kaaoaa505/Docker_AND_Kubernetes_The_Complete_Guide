const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Home page! v2 updated.')
});

app.listen(8080, () => {
    console.log('server is running: http://localhost:8080 by node js')
    console.log('server is running: http://localhost:9090 by docker run')
})