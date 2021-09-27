export default function moneyFormat (val, currency = "BRL") {
  if (!val && val !== 0) return;
  if (isNaN(val)) {
    val = removeCurrency(val)
  }
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency:
      currency === "$" || currency === "USD" || currency === "US$"
        ? "USD"
        : "BRL",
    minimumFractionDigits: 0
  });
  const _format = formatter.format(val);
  if (_format.includes("R$")) return formatter.format(val).replace("$", "$ ");
  return formatter.format(val).replace("$", "US$ ");
}

export function removeCurrency (val) {
  return val.replace('$', '').replace('R', '').replace(/\./g, '').replace(',', '.').trim();
}
export function checkIfNegative (val) {
  if (val.indexOf && val.indexOf('-') >= 0) return true;
  return false;
}