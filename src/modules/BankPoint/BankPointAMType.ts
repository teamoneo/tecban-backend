import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';

export default new GraphQLObjectType({
  name: 'BankPointTMType',
  fields: {
    Identification: {
      type: GraphQLNonNull(GraphQLString),
    },
    Latitude: {
      type: GraphQLNonNull(GraphQLString),
    },
    Longitude: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
