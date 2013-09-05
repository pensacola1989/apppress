var appController = require('./contrl');

exports = module.exports = function(server) {
    server.get('/app', appController.findAll);
    server.get('/app/:id', appController.findById);
    server.post('/app', appController.save);
    server.put('/app/:id', appController.update);
    server.delete('/app/:id', appController.delete);
};