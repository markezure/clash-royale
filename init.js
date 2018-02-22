const express = require('express');
const routes = require('./app/routes.js');
const app = express();

// Define the port to run on
app.set('port', 3000);

// set up the template engine
app.set('views', __dirname  + '/public/views');
app.set('view engine', 'pug');

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Servidor rodando em ' + port);
});

app.use(express.static('public'));

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

routes(app);