import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'AccountType',
  fields: {
    accountId: {
      type: GraphQLNonNull(GraphQLString),
    },
    bank: {
      type: GraphQLNonNull(GraphQLInt),
    },
  },
});
