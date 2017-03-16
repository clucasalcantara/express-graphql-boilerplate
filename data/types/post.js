let Post;
let Author;

module.exports = () => [Post, Author];

Author = require('./author');

Post = `
  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }
`;

