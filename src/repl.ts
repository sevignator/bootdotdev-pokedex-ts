import { type State } from './state.js';

export function cleanInput(input: string): string[] {
  const words = input.toLowerCase().trim().split(' ');
  return words.filter((word) => word !== '');
}

export async function startREPL(state: State) {
  const { readlineInterface, commandsRegistry } = state;

  // Display the prompt to the user
  readlineInterface.prompt();

  // Listen for user input
  readlineInterface.on('line', async (input) => {
    const words = cleanInput(input);
    const commandName = words[0];
    const args = words.slice(1);

    // Exit early if no input was provided
    if (commandName === '') {
      readlineInterface.prompt();
      return;
    }

    if (commandsRegistry[commandName]) {
      await commandsRegistry[commandName].callback(state, ...args);
    } else {
      console.log('Unknown command');
    }

    readlineInterface.prompt();
  });

  return;
}
