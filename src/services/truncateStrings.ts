export function truncateString(theString: string, maxLength: number): string {
  if (theString.length >= maxLength) {
    return theString.slice(0, maxLength) + "...";
  }
  return theString;
}
