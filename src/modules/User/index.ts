import { GraphQLString, GraphQLInputObjectType } from 'graphql';

import UserType from './UserType';

import login from './UserLoader';

export const queries = {
  login: {
    type: UserType,
    resolve: login,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'AuthInput',
          fields: {
            email: {
              type: GraphQLString,
            },
            password: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
  },
};

export const mutations = {};
