import { queries as userQueries } from './User';
import { queries as extractQueries } from './Extract';

export default {
  ...userQueries,
  ...extractQueries,
};
