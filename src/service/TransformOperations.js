import { OperationType, Assessment, Culture } from "@/models/Operation.js";

const _transformItem = (model, item) => {
  return item in model ? model[item] : item;
};
export const _transformOperation = operation => {
  const { type, assessment, culture } = operation;
  return {
    ...operation,
    type: _transformItem(OperationType, type),
    assessment: _transformItem(Assessment, assessment),
    assessmentClassname: _transformItem(Assessment, assessment)
      ? _transformItem(Assessment, assessment).toLowerCase()
      : "noneMark",
    culture: _transformItem(Culture, culture),
    cultureIcon: _transformItem(Culture, culture)
      ? _transformItem(Culture, culture).toLowerCase()
      : null
  };
};
