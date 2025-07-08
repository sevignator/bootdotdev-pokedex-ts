import { type State } from '../state.js';

export async function pokedexCommand(state: State) {
  if (state.pokedex.size === 0) {
    console.log('Your Pokédex is currently empty. Go catch some Pokémon!');
    return;
  }

  state.pokedex.forEach((_, key) => {
    console.log(` - ${key}`);
  });
}
