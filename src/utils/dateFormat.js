import { format, parseISO } from "date-fns";
import { ptBR } from 'date-fns/locale'

export default function dateFormat (day, hour) {
  const currentDate = new Date();
  const fakeDate = format(parseISO(new Date(currentDate.getFullYear(), currentDate.getMonth(),  day, hour).toISOString()), "iiiiii, dd/LLL 'às' hh:mm", { locale: ptBR });
  const formattedFirstLetter = fakeDate.charAt(0).toUpperCase() + fakeDate.slice(1);
  const formattedMonthLetter = formattedFirstLetter.charAt(8).toUpperCase() + formattedFirstLetter.charAt(9) + formattedFirstLetter.charAt(10);

  return formattedFirstLetter.replace(formattedFirstLetter.charAt(8) + formattedFirstLetter.charAt(9) + formattedFirstLetter.charAt(10) , formattedMonthLetter)
}