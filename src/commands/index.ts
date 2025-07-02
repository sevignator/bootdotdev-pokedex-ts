import { exitCommand } from "./exitCommand.js";
import { helpCommand } from "./helpCommand.js";

interface CLICommand {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void | void;
}
export type CLIRegistry = Record<string, CLICommand>;

export function getCommands(): CLIRegistry {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: exitCommand,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: helpCommand,
    },
  };
}
