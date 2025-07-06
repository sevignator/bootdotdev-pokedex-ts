import { exitCommand } from './exitCommand.js';
import { helpCommand } from './helpCommand.js';

import { type State } from '../state.js';

export interface CLICommand {
  name: string;
  description: string;
  callback: (state: State) => void;
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
  };
}
