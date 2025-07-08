import { type State } from '../state.js';

export async function mapCommand(state: State) {
  const data = await state.pokeAPI.fetchLocationAreas(state.nextLocationsURL);

  if (!data) {
    throw new Error('There was a issue fetching the location areas data.');
  }

  const { results, previous, next } = data;

  state.prevLocationsURL = previous;
  state.nextLocationsURL = next;

  results?.forEach((area) => {
    console.log(area.name);
  });
}
