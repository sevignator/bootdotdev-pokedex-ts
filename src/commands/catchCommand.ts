import { type State } from '../state.js';

export async function catchCommand(state: State, ...args: string[]) {
  const [pokemonName] = args;
  const pokemonData = await state.pokeAPI.fetchPokemon(pokemonName);

  if (!pokemonData) {
    console.log('This Pokémon does not exist!');
    return;
  }

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  if (randomNumber < 25) {
    console.log(`${pokemonName} was caught!`);
    state.pokedex.set(pokemonName, pokemonData);
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}
