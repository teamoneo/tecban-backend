import { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLNonNull } from 'graphql';

import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: {
    accountId: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLList(GraphQLString),
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
