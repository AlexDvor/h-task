export default function normalizeSearchQuery(name, arr) {
  const normalizeName = name.toLowerCase();
  const result = arr.filter(item => item.name.toLowerCase() === normalizeName);
  return result;
}
