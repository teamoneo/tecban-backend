import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';

export default new GraphQLObjectType({
  name: 'BankPointAgencyType',
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
    Contact: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
