import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import ExtractType from './ExtractType';

import { getAllExtracts, getExtractsByAccount } from './ExtractLoader';

export const queries = {
  getAllExtracts: {
    type: GraphQLList(ExtractType),
    resolve: getAllExtracts,
  },
  getExtractsByAccount: {
    type: GraphQLList(ExtractType),
    resolve: getExtractsByAccount,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'ExtractByAccountInput',
          fields: {
            accountId: {
              type: GraphQLString,
            },
            bank: {
              type: GraphQLInt,
            },
          },
        }),
      },
    },
  },
};

export const mutations = {};
