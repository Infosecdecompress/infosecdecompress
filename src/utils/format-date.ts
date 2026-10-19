import type { DateFormat } from "@/constants";

const formatDate = (date: string, { locale, options }: DateFormat): string =>
  new Date(date).toLocaleDateString(locale, options);

export default formatDate;
