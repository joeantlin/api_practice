//Models
const Task = require("./models")

module.exports = {
    index:(req, res) => {
        res.redirect('/tasks');
    },
    alltasks:(req, res) => {
        Task.find({}, (err, tasks) => {
            if (err) res.json({message: "Query Error"});
            res.json({data: tasks});
        })
    },
    newtask:(req, res) => {
        var task = new Task({title: req.params.tit, description: req.params.des});
        task.save(err => {
            if (err) res.json({message: "Query Error"});
            res.redirect('/');
        })
    },
    findtask: (req, res) => {
        Task.findOne({_id: req.params.id}, (err, task) => {
            if (err) res.json({message: "Query Error"});
            res.json({data: task});
        })
    },
    updatetask: (req, res) => {
        Task.findOneAndUpdate({_id: req.params.id}, {$set: {title: req.params.tit, description: req.params.des}}, function(err){
            if (err) res.json({message: "Query Error"});
            res.redirect('/');
        })
    },
    deletetask: (req, res) => {
        Task.deleteOne({_id: req.params.id}, err => {
            if (err) res.json({message: "Query Error"});
            res.redirect('/');
        })
    }
    

}
