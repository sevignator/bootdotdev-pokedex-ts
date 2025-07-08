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

interface LocationAreaData {
  pokemon_encounters: PokemonEncounter[];
}

interface PokemonEncounter {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
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
      } else {
        console.log(e);
      }
    }
  }

  async fetchLocationArea(locationName: string) {
    try {
      const endpoint = `${PokeAPI.baseURL}/location-area/${locationName}`;
      const cachedData = this.cache.get<LocationAreaData>(endpoint);

      if (cachedData) {
        return cachedData;
      }

      const res = await fetch(endpoint);
      const data: LocationAreaData = await res.json();

      this.cache.add<LocationAreaData>(endpoint, data);

      return data;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log(e);
      }
    }
  }

  async fetchPokemon(pokemonName: string) {
    try {
      const endpoint = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
      const cachedData = this.cache.get<LocationAreaData>(endpoint);

      if (cachedData) {
        return cachedData;
      }

      const res = await fetch(endpoint);
      const data = await res.json();

      this.cache.add(endpoint, data);

      return data;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log(e);
      }
    }
  }
}
