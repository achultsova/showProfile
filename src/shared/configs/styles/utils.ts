export function adaptive(
  mobSize: number | string,
  pcSize: number | string,
  minWidth: number | string = 375,
  maxWidth: number | string = 1920
) {
  if (typeof minWidth == 'string') {
    minWidth = +minWidth.replace('px', '');
  }

  if (typeof maxWidth == 'string') {
    maxWidth = +maxWidth.replace('px', '');
  }

  const addSize = +pcSize - +mobSize;
  const width = maxWidth - minWidth;
  return `calc(${mobSize}px + ${addSize} * ((100vw - ${minWidth}px) / ${width}))`;
}
