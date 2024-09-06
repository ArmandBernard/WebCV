import { renderToString } from "react-dom/server";
import App from "./src/App";
import { readFileSync, writeFileSync } from "node:fs";

const content = renderToString(<App />);

const html = readFileSync("index.html").toString();

const filled = html.replace(
  `<div id="root" role="presentation"></div>`,
  content
);

writeFileSync("index-filled.html", filled);
