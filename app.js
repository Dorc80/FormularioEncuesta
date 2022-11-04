const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/static"))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, resp) => {
    resp.render('index');
})

app.post('/encuesta', (req, resp) => {
    resp.render('resultado', { encuesta: req.body });
});

app.get('*', (req, resp) => {
    resp.render('404');
});

app.listen(8000, () => {
    console.log('listening on 8000');
})