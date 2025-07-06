import { type State } from '../state.js';

export function exitCommand(state: State) {
  const { readlineInterface } = state;

  console.log('Closing the Pokedex... Goodbye!');
  readlineInterface.close();
  process.exit(0);
}
