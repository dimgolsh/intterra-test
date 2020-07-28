import ruIntterra from "@/locales/intterra-ru-RU.json";

export default class Locale {
  constructor(locale) {
    this.locale = locale;
    this.locales = {
      "ru-RU": ruIntterra
    };
  }
  localeData(operation) {
    return {
      ...operation,
      type: this.locales[this.locale][operation.type],
      assessment:
        this.locales[this.locale][operation.assessment] ?? "Нет оценки",
      culture: this.locales[this.locale][operation.culture],
      date: this.localeDate(operation.date)
    };
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
