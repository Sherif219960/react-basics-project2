export function textSlicer(text: string, max: number = 400) {
  if (text.length > max) `${text.slice(0, max)}...`;
  return text;
}
