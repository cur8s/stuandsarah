require('./server/config');

const express = require ('express');
const path = require ('path');
const hbs = require ('hbs');

const port = process.env.PORT;

let app = express();

app.use(express.static(path.join(__dirname, 'wwwroot')));

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('layout.hbs', {
        title: '',
        template: 'pages/home',
        mainClass: '',
        activeNav: {
          home: true
        }
      });
});

app.listen(port, () => {
    console.log(`Listening for requests: http://localhost:${port}`);
})