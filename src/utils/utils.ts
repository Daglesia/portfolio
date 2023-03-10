export function openInNewTab(url: string | undefined): void {
  if (url) {
    window.open(url, "_blank", "noreferrer");
  }
}

export function splitArrayToChunks<Type>(
  inputArray: Type[],
  chunkSize: number
): Array<Array<Type>> {
  const array = [];
  for (let i = 0; i < inputArray.length; i += chunkSize)
    array.push(inputArray.slice(i, i + chunkSize));
  return array;
}
