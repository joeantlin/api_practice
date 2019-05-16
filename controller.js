//Models
const Task = require("./models")

module.exports = {
    alltasks:(req, res) => {
        Task.find({})
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    newtask:(req, res) => {
        Task.create(req.body)
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    findtask: (req, res) => {
        Task.findById(req.params.id)
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    updatetask: (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    deletetask: (req, res) => {
        Task.findByIdAndRemove(req.params.id)
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    }
}
