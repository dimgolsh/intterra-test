import { OperationType, Assessment, Culture } from "@/models/Operation.js";

export const _transformOperation = operation => {
  return {
    ...operation,
    type: OperationType[operation.type],
    assessment: Assessment[operation.assessment],
    assessmentClassname: Assessment[operation.assessment]
      ? Assessment[operation.assessment].toLowerCase()
      : "noneMark",
    culture: Culture[operation.culture],
    cultureIcon: Culture[operation.culture]
      ? Culture[operation.culture].toLowerCase()
      : null
  };
};
