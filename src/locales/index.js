import ruIntterra from "@/locales/intterra-ru-RU.json";

export default class Locale {
  constructor(locale) {
    this.locale = locale;
    this.locales = {
      "ru-RU": ruIntterra
    };
    this.currentLocale = this.checkLocale();
  }
  checkLocale() {
    return this.locale in this.locales ? this.locales[this.locale] : null;
  }
  localeData(operation) {
    const { type, assessment, date, culture } = operation;
    if (this.currentLocale) {
      return {
        ...operation,
        type: this.localeItem(type),
        assessment: this.localeItem(assessment) ?? "Нет оценки",
        culture: this.localeItem(culture),
        date: this.localeDate(date)
      };
    }
    return {
      ...operation,
      date: this.localeDate(date)
    };
  }
  localeItem(item) {
    return item in this.currentLocale ? this.currentLocale[item] : item;
  }
  localeDate({ year, month, day }) {
    const date = new Date(year, month, day);
    return date.toLocaleString([this.locale], {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
}
