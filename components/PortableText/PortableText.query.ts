import { buttonHrefQuery, buttonQuery } from "../buttons/button.query";
import { imageSourceQuery } from "../images/image.query";
import { videoSourceQuery } from "../video/video.query";
import groq from "groq";

export const richTextImage = `
_type == "image.simple" => {
  ...,
  "image": ${imageSourceQuery},
}`;

export const richTextVideo = `
_type == "video" => {
  "video": ${videoSourceQuery}
}`;

export const richTextButtons = `
_type == "buttons" => {
  "direction": direction,
  "items": items[] ${buttonQuery}
}`;

export const richTextCSV = `
_type == "csv" => {
  "file": file.asset->url,
  "fileName": file.asset->originalFilename,
}`;

export const richTextMarkDefs = `
markDefs[]{
  ...,
  _type == "link" => {
    "href": ${buttonHrefQuery},
    "target": select(newWindow => '_blank')
  }
}`;

export const richTextQueryFields = groq`
  ...,
  ${richTextImage},
  ${richTextVideo},
  ${richTextButtons},
  ${richTextCSV},
  ${richTextMarkDefs}
 `;

export const richTextQuery = groq`
{
  ${richTextQueryFields}
}
`;