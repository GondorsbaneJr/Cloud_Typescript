import { Command } from "./Command";
import { Hello } from "./commands/hello";

export const Commands: Command[] = [Hello];
export const CommandNames: string[] = Commands.map((command) => command.name);
