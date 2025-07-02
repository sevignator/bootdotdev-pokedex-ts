import { type CLIRegistry } from "./index.js";

export function helpCommand(registry: CLIRegistry) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");

  for (const commandKey of Object.keys(registry)) {
    const { name, description } = registry[commandKey];
    console.log(`${name}: ${description}`);
  }
}
