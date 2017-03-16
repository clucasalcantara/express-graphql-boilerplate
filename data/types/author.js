let Post;
let Author;

module.exports = () => [Author, Post];

Post = require('./post');

Author = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }
`;

