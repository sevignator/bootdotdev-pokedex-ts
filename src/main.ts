import { startREPL } from './repl.js';
import { initState } from './state.js';
import { PokeAPI } from './pokeapi.js';

function main() {
  const state = initState();
  PokeAPI.setState(state);

  startREPL(state);
}

main();
