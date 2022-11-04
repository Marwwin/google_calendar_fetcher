
export function getOffsetDate(dateOffset) {
  const date = new Date();
  date.setDate(date.getDate() + dateOffset);
  return date.toISOString();
}
