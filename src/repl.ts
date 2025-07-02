import { createInterface } from "node:readline/promises";
import { getCommands } from "./commands/index.js";

export function cleanInput(input: string): string[] {
  const words = input.toLowerCase().trim().split(" ");
  return words.filter((word) => word !== "");
}

export async function startREPL() {
  // Generate the "readline" interface
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  // Display the prompt to the user
  readline.prompt();

  // Listen for user input
  readline.on("line", (input) => {
    const words = cleanInput(input);
    const command = words[0];
    const commands = getCommands();

    // Exit early if no input was provided
    if (command === "") {
      readline.prompt();
      return;
    }

    if (commands[command]) {
      commands[command].callback(commands);
    } else {
      console.log("Unknown command");
    }

    readline.prompt();
  });

  return;
}
