import { GraphQLString, GraphQLObjectType, GraphQLFloat } from 'graphql';

import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'ExtractType',
  fields: {
    CreditDebitIndicator: {
      type: GraphQLString,
    },
    Amount: {
      type: GraphQLFloat,
    },
    BookingDateTime: {
      type: GraphQLDateTime,
    },
    TransactionInformation: {
      type: GraphQLString,
    },
  },
});
