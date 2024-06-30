import { Prof, Technology } from "./helpersTypes";

export function listTec(tec: Technology[]) {
  const filterTec = tec.filter((t) => t.poweredByNodejs === true);
  const list = filterTec.map((t) => `<li>${t.name}-${t.type}</li>`);
  return `<ul>${list.join("")}</ul>`;
}
