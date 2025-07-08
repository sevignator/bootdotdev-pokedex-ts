import { type State } from '../state.js';

import { catchCommand } from './catchCommand.js';
import { exitCommand } from './exitCommand.js';
import { exploreCommand } from './exploreCommand.js';
import { helpCommand } from './helpCommand.js';
import { inspectCommand } from './inspectCommand.js';
import { mapCommand } from './mapCommand.js';
import { mapbCommand } from './mapbCommand.js';
import { pokedexCommand } from './pokedexCommand.js';

export interface CLICommand {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
}

export function getCommands(): Record<string, CLICommand> {
  return {
    catch: {
      name: 'catch',
      description: 'Attempt to catch a Pokémon using a pokéball',
      callback: catchCommand,
    },
    exit: {
      name: 'exit',
      description: 'Exit the Pokedex',
      callback: exitCommand,
    },
    explore: {
      name: 'explore',
      description: 'Explore a specific location area',
      callback: exploreCommand,
    },
    help: {
      name: 'help',
      description: 'Displays a help message',
      callback: helpCommand,
    },
    map: {
      name: 'map',
      description: 'Displays a list of location areas',
      callback: mapCommand,
    },
    mapb: {
      name: 'mapb',
      description: 'Goes back to the previous page of location area results',
      callback: mapbCommand,
    },
    inspect: {
      name: 'inspect',
      description: 'Inspect a given Pokémon',
      callback: inspectCommand,
    },
    pokedex: {
      name: 'pokedex',
      description: 'Inspect a given Pokémon',
      callback: pokedexCommand,
    },
  };
}
