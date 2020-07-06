const Todo = require('./models/Todo');

const resolvers = {
  Query: {
    getAllTodos: async (_, args) => {
      const Todos = await Todo.find().sort({ createdDate: 'desc' });
      return Todos;
    },
    getTodo: async (_, { _id }) => {
      const todo = await Todo.findOne({ _id });
      console.log(todo);
      return todo;
    },
  },
  Mutation: {
    createTodo: async (_, args) => {
      const newTodo = await new Todo(args).save();
      return newTodo;
    },
    deleteTodo: async (_, { _id }) => {
      const deletedTodo = await Todo.findOneAndRemove(_id);
      if (deletedTodo) {
        console.log(deletedTodo);
        return deletedTodo;
      }
    },
  },
};

module.exports = resolvers;
