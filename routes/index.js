module.exports = function (app) {
    app.use('/blogs', require('./blogs'));
    app.use('/stores', require('./stores'));
};