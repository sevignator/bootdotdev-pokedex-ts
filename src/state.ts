import { createInterface, type Interface } from 'node:readline';
import { getCommands } from './commands/index.js';
import { PokeAPI, type Pokemon } from './pokeapi.js';

export interface State {
  readlineInterface: Interface;
  commandsRegistry: ReturnType<typeof getCommands>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  pokedex: Map<string, Pokemon>;
}

export function initState(): State {
  return {
    readlineInterface: createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Pokedex > ',
    }),
    commandsRegistry: getCommands(),
    pokeAPI: new PokeAPI(),
    nextLocationsURL: null,
    prevLocationsURL: null,
    pokedex: new Map(),
  };
}
