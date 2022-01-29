export function getTimeDiff(timestamp) {
  const timestampDiff = Date.now() - timestamp * 1000;

  return timestampDiff / 1000 / 60;
}
