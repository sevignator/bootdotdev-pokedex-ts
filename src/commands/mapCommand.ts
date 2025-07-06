import { type State } from '../state.js';

export async function mapCommand(state: State) {
  const results = await state.pokeAPI.fetchLocationAreas(
    state.nextLocationsURL
  );

  results?.forEach((area) => {
    console.log(area.name);
  });
}
