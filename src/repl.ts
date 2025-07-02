import { createInterface } from "node:readline/promises";

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

    // Exit early if no input was provided
    if (words.length === 0) {
      readline.prompt();
      return;
    }

    console.log(`Your command was: ${words[0]}`);
    readline.prompt();
  });

  return;
}
