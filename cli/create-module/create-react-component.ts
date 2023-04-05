import { AnswersType } from ".";
import { prettierFile } from "../utils/prettier-file";
import { formatName } from "./format-name";
import { write } from "./get-args";
import { getReactComponentSnippet } from "./templates/react-component";

/**
 * Create the schema file
 */
const fs = require("fs");
const path = require("path");

export function createReactComponent(
  answers: Pick<AnswersType, "moduleName" | "fields">,
) {
  let { moduleName, fields } = answers;
  let { lowerName, pascalName } = formatName(moduleName);

  let lines = getReactComponentSnippet({ pascalName, lowerName, fields });

  if (write) {
    let filePath = `${__dirname}/../../modules/${lowerName}/${pascalName}.tsx`;
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, lines);
    prettierFile(filePath);
  }

  return lines;
}
