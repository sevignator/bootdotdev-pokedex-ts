import { type State } from '../state.js';

export async function helpCommand(state: State) {
  const { commandsRegistry } = state;

  console.log('Welcome to the Pokedex!');
  console.log('Usage:\n');

  for (const commandKey of Object.keys(commandsRegistry)) {
    const { name, description } = commandsRegistry[commandKey];
    console.log(`${name}: ${description}`);
  }
}
