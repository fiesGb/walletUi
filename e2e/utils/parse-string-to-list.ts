export function parseStringToList(inputString: string): string[] {
  return inputString
    .replace(/"/g, '')
    .split(',')
    .map(input => input.trim());
}
