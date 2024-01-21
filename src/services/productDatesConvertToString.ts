export function convertProductDates(productDates: number): string {
  if (productDates === 0) {
    return "published_at";
  } else if (productDates === 1) {
    return "-published_at";
  }
  return "";
}
