export function cleanInput(input: string): string[] {
  const words = input.toLowerCase().trim().split(/\s+/);
  return words;
}
