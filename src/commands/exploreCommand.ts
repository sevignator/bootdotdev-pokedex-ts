import { type State } from '../state';

export async function exploreCommand(state: State, ...args: string[]) {
  const [locationName] = args;
  const data = await state.pokeAPI.fetchLocationArea(locationName);

  if (!data) {
    throw new Error('There was a issue fetching the data for this area.');
  }

  console.log(`Exploring ${locationName}...`);

  if (data.pokemon_encounters.length > 0) {
    console.log('Found Pokemon:');

    data.pokemon_encounters.forEach((encounter) => {
      console.log(`- ${encounter.pokemon.name}`);
    });
  }
}
