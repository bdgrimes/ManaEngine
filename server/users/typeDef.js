const { gql } = require('apollo-server');

const typeDef = gql`

    type User {
        name: String
        email: String
        password: String
    }

    type Query {
        users: [User]
    }
`;

module.exports = {
    typeDef,
}