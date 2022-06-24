const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

//Tự động nạp file index.js
const route = require('./routes');

//use static file
app.use(express.static(path.join(__dirname, 'public')));
//node-sass chuyển đổi scss sang css, debug

app.use(
    express.urlencoded({
        extended: true, //chọn qs library để parsing url và encoding data
    }),
);
app.use(express.json()); //parsing json

// HTTP Logger => Dễ dàng debug, biết đường dẫn,...
app.use(morgan('combined'));

//Template engine => Tự động load
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//app.enable('view cache')

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`); //http://localhost:3000/
});
