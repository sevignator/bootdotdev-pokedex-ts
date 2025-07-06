import { exitCommand } from './exitCommand.js';
import { helpCommand } from './helpCommand.js';
import { mapCommand } from './mapCommand.js';
import { mapbCommand } from './mapbCommand.js';
import { type State } from '../state.js';

export interface CLICommand {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
}

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: 'exit',
      description: 'Exit the Pokedex',
      callback: exitCommand,
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
      name: 'map',
      description: 'Goes back to the previous page of location area results',
      callback: mapbCommand,
    },
  };
}
