import { type State } from '../state.js';
import { type Pokemon } from '../pokeapi.js';

export async function inspectCommand(state: State, ...args: string[]) {
  const [pokemonName] = args;
  const pokemonData = state.pokedex.get(pokemonName);

  if (!pokemonData) {
    console.log('you have not caught that pokemon');
    return;
  }

  printReport(pokemonData);
}

function printReport(pokemonData: Pokemon) {
  console.log('Name:', pokemonData.name);
  console.log('Height:', pokemonData.height);
  console.log('Weight:', pokemonData.weight);
  console.log('Stats:');
  for (const statData of Object.values(pokemonData.stats)) {
    console.log(`  - ${statData.stat.name}: ${statData.base_stat}`);
  }
  console.log('Types:');
  for (const typeData of Object.values(pokemonData.types)) {
    console.log(`  - ${typeData.type.name}`);
  }
}
