import { exitCommand } from './exitCommand.js';
import { helpCommand } from './helpCommand.js';
import { type CLICommand } from '../state.js';

export type CLICommandsRegistry = Record<string, CLICommand>;

export function getCommands(): CLICommandsRegistry {
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
