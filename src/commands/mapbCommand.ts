import { type State } from '../state.js';

export async function mapbCommand(state: State) {
  if (state.prevLocationsURL === null) {
    console.log("You're on the first page!");
    return;
  }

  const data = await state.pokeAPI.fetchLocationAreas(state.prevLocationsURL);

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
