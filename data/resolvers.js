const Query = require('./resolvers/Query');
const Author = require('./resolvers/Author');
const Post = require('./resolvers/Post');

const resolveFunctions = {
  Query,
  Author,
  Post,
};

module.exports = resolveFunctions;
