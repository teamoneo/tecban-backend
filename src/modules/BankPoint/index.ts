import { GraphQLList } from 'graphql';
import BankPointAMType from './BankPointAMType';
import BankPointAgencyType from './BankPointAgencyType';
import { getAtms, getAgencys } from './BankPointLoader';

export const queries = {
  getAtms: {
    type: GraphQLList(BankPointAMType),
    resolve: getAtms,
  },
  getAgencys: {
    type: BankPointAgencyType,
    resolve: getAgencys,
  },
};

export const mutations = {};
