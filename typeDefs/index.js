const RootDef = require('./root');
const TodoDef = require('./TodoDef');

// This array allows us to split our TypeDefs logically and get them all together
// This can then be passed on to the Apollo Server.
const schemaArray = [RootDef, TodoDef];

module.exports = schemaArray;
