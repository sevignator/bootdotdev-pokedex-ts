import { createInterface, type Interface } from 'node:readline';
import { getCommands, type CLICommandsRegistry } from './commands/index.js';

export interface State {
  readlineInterface: Interface;
  commandsRegistry: CLICommandsRegistry;
}

export interface CLICommand {
  name: string;
  description: string;
  callback: (state: State) => void;
}

export function initState(): State {
  // Generate the readline interface
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > ',
  });

  // Get the commands registry
  const commandsRegistry = getCommands();

  return {
    readlineInterface,
    commandsRegistry,
  };
}
