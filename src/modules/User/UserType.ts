import {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

import { GraphQLDateTime } from 'graphql-iso-date';

import AccountType from './AccountType';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: {
    accounts: {
      type: GraphQLList(AccountType),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  },
});
