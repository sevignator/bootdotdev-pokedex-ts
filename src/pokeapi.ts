import { type State } from './state.js';

interface ShallowLocation {
  name: string;
  url: string;
}

interface LocationAreasData {
  next: string | null;
  previous: string | null;
  results: ShallowLocation[];
}

export class PokeAPI {
  private static state: State | null;
  private readonly baseURL = 'https://pokeapi.co/api/v2';

  static setState(state: State) {
    PokeAPI.state = state;
  }

  async fetchLocationAreas(pageURL: string | null) {
    if (!PokeAPI.state) {
      throw new Error(
        "There was an issue while loading the program's state in the PokeAPI."
      );
    }

    try {
      const endpoint = pageURL ? pageURL : `${this.baseURL}/location-area`;
      const res = await fetch(endpoint);
      const data: LocationAreasData = await res.json();
      const { next, previous, results } = data;

      PokeAPI.state.prevLocationsURL = previous;
      PokeAPI.state.nextLocationsURL = next;

      return results;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }

  async fetchLocationArea(locationName: string) {
    const endpoint = `${this.baseURL}/location-area/${locationName}`;
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
  }
}
