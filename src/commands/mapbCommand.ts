import { type State } from '../state.js';

export async function mapbCommand(state: State) {
  if (state.prevLocationsURL === null) {
    console.log("You're on the first page!");
    return;
  }

  const results = await state.pokeAPI.fetchLocationAreas(
    state.prevLocationsURL
  );

  results?.forEach((area) => {
    console.log(area.name);
  });
}
