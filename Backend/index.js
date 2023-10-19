const express = require('express')
const data = require('./items.json')
const app = express()
const port = 8991

app.get('/items', (req, res) => {
    res.send(data);
})
app.listen(port, () => {
    console.log('listening on port');
});
