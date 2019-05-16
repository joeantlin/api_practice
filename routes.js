//Controller
const controller = require("./controller")

module.exports = function(app){
    app.get('/tasks', controller.alltasks)
    app.post('/task', controller.newtask)
    app.get('/task/:id', controller.findtask)
    app.put('/task/:id', controller.updatetask)
    app.delete('/task/:id', controller.deletetask)
}