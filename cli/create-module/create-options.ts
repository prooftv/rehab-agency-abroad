import { AnswersType } from ".";
import { prettierFile } from "../utils/prettier-file";
import { formatName } from "./format-name";
import { getOptionsSnippet } from "./templates/options";

/**
 * Create the schema file
 */
const fs = require("fs");

export function createOptions(
  answers: Pick<AnswersType, "moduleName">,
  WRITE = false,
) {
  let { moduleName } = answers;
  let { lowerName } = formatName(moduleName);
  const filePath = `${__dirname}/../../modules/${lowerName}/${lowerName}.options.ts`;

  const lines = getOptionsSnippet();

  if (WRITE) {
    fs.writeFileSync(filePath, lines);
    prettierFile(filePath);
  }

  return lines;
}
