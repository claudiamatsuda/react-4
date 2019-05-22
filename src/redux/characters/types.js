export const SHOW_CHARACTERS = 'SHOW_CHARACTERS';
export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';

export const requestCharacters = query => ({
  type: REQUEST_CHARACTERS,
  payload: query
});

// export const requestCharacters = query => {
//   console.log('Estou no types: ' + query);
//   return {
//     type: REQUEST_CHARACTERS,
//     payload: query
//   }
// };

export const showCharacters = characters => ({
  type: SHOW_CHARACTERS,
  payload: characters
});
