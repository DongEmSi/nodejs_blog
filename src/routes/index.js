//Mục đích: Chuyển hết các dòng code về routes vào đây
const newsRouter = require('./news');
const siteRouter = require('./site');
const filmRouter = require('./films');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/films', filmRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
