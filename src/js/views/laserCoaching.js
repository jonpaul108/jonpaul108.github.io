import { portfolioHTMLTemplate } from "./portfolioTemplate.js";
import Content from "../../content/laserCoaching.js";

function combineContentWithTemplate() {
  console.log(Content);
  const generated = portfolioHTMLTemplate(Content);
  return generated;
}

export default combineContentWithTemplate;
