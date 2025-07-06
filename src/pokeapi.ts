import { Cache } from './pokecache.js';

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
  private static readonly baseURL = 'https://pokeapi.co/api/v2';
  public cache = new Cache(100000);

  async fetchLocationAreas(pageURL: string | null) {
    try {
      const endpoint = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area`;
      const cachedData = this.cache.get<LocationAreasData>(endpoint);

      if (cachedData) {
        return cachedData;
      }

      const res = await fetch(endpoint);
      const data: LocationAreasData = await res.json();

      this.cache.add<LocationAreasData>(endpoint, data);

      return data;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }

  async fetchLocationArea(locationName: string) {
    const endpoint = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
  }
}
