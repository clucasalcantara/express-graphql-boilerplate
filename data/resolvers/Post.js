const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];

module.exports = {
  author(post) {
    return authors.find(a => a.id === post.authorID);
  },
};
