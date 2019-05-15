//Controller
const controller = require("./controller")

module.exports = function(app){
    app.get('/', controller.index)
    app.get('/tasks', controller.alltasks)
    app.post('/task/:tit/:des', controller.newtask)
    app.get('/task/:id/', controller.findtask)
    app.put('/task/:id/:tit/:des', controller.updatetask)
    app.delete('/task/:id/', controller.deletetask)
}