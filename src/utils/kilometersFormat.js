export default function kilometersFormat (val) {
  if (!val && val !== 0) return;

  const formatted = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

  return `${formatted} km`
}