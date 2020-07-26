import { queries as userQueries } from './User';
import { queries as extractQueries } from './Extract';
import { queries as bankPointsQueries } from './BankPoint';

export default {
  ...userQueries,
  ...extractQueries,
  ...bankPointsQueries,
};
