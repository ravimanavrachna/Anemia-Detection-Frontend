export function formatDate(isoDateStr) {
  if (!isoDateStr) return "";

  const date = new Date(isoDateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
