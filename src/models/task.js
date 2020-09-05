const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description : {
        type : String,
        required: true,
        trim: true
    },
    completed : {
        type: Boolean,
        default: false
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema, );

/*const task = new Task({
    description : 'learn node js',
    completed : false
});

task.save().then(() => {
    console.log(task);
}).catch(() => {
    console.log(error);
});*/

module.exports = Task;