import TDate from "./TDate";
export let OperationType;
(function(OperationType) {
  OperationType[(OperationType["PLOWING"] = 0)] = "PLOWING";
  OperationType[(OperationType["BOWLING"] = 1)] = "BOWLING";
  OperationType[(OperationType["FERTILIZATION"] = 2)] = "FERTILIZATION";
  OperationType[(OperationType["WATERING"] = 3)] = "WATERING";
  OperationType[(OperationType["RIGGING"] = 4)] = "RIGGING";
  OperationType[(OperationType["HARVESTING"] = 5)] = "HARVESTING"; // Сбор урожая
})(OperationType || (OperationType = {}));
export let Assessment;
(function(Assessment) {
  Assessment[(Assessment["EXCELLENT"] = 0)] = "EXCELLENT";
  Assessment[(Assessment["SATISFACTORILY"] = 1)] = "SATISFACTORILY";
  Assessment[(Assessment["BADLY"] = 2)] = "BADLY"; // Плохо
})(Assessment || (Assessment = {}));
export let Culture;
(function(Culture) {
  Culture[(Culture["WHEAT"] = 0)] = "WHEAT";
})(Culture || (Culture = {}));
export default class Operation {
  constructor(args) {
    const {
      id = null,
      type,
      date,
      area,
      comment = null,
      assessment = null,
      culture = null,
      status = 0
    } = args;
    this.id = id;
    this.type = type;
    this.date = new TDate(date);
    this.area = area;
    this.comment = comment;
    this.assessment = assessment;
    this.culture = culture;
    this.status = status;
  }
}
