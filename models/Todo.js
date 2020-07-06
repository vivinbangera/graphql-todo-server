const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
