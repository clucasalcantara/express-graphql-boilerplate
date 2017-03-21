# express-graphql-boilerplate

## Features

- Express server
- GraphQL
- GraphQl tools
- eslint with airbnb
- winston logger

## Installation

```
npm install
```

```
yarn install
```

## Usage

### Production

Start the server
```
npm start
```
```
yarn start
```
And query http://localhost:4000/graphql/
```shell
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ posts { id } }"}' \
http://localhost:4000/graphql
```

### Dev

Start the server

```
NODE_ENV=dev npm start
```

```
NODE_ENV=dev yarn start
```

GraphiQL will be running at http://localhost:4000/graphiql/
