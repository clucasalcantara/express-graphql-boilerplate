let Post;
let Author;

module.exports = () => [Author, Post];

Post = require('./post');

Author = `
  type Author {
    id: Int! # the ! means that every author object _must_ have an id
    firstName: String
    lastName: String
    posts: [Post] # the list of Posts by this author
  }
`;

