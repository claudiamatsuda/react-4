import { SHOW_CHARACTERS } from './types';

const Characters = (state = [], action) => {
  if (action.type === SHOW_CHARACTERS) return action.payload;
  return state;
};

export default Characters;
