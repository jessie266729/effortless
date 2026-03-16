import { PREDEFINED_KEYFRAMES } from "../animate/constant";

export const VALID_CSS_PROPERTIES: string[] = [
  "margin",
  "padding",
  "width",
  "height",
  "box",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "z-index",
  "flex",
  "justify-content",
  "align-items",
  "gap",
  "grid",
  "font",
  "text",
  "line-height",
  "letter-spacing",
  "white-space",
  "word-break",
  "background",
  "border",
  "outline",
  "transition",
  "animation",
  "transform",
  "translate",
  "rotate",
  "scale",
  "skew",
  "filter",
  "backdrop",
  "cursor",
  "pointer",
  "user-select",
  "scroll",
  "color",
  "overflow",
];

// 生成CSS规则
export function generateCSS(classNames: string[]): string {
  let css = "";
  const usedKeyframes = new Set<string>();

  classNames.forEach((cls) => {
    if (cls.startsWith("animation-[")) {
      const value = cls.replace("animation-[", "").replace("]", "");
      const vList = value.split("_");
      const name = vList[0];
      if (PREDEFINED_KEYFRAMES[name as keyof typeof PREDEFINED_KEYFRAMES]) {
        if (!usedKeyframes.has(name)) {
          css +=
            PREDEFINED_KEYFRAMES[name as keyof typeof PREDEFINED_KEYFRAMES] +
            "\n";
          usedKeyframes.add(name);
        }
        css += `.${cls.replace(/[\[\]]/g, "\\$&")} { animation: ${vList.join(
          " "
        )} }\n`;
      }
    } else if (
      cls.match(/^([a-z-]+)-\[[^\]]+\]$/) &&
      VALID_CSS_PROPERTIES.includes(cls.split("-")[0])
    ) {
      const cArray = cls.split("-");
      const len = cArray.length;
      if (len >= 2) {
        const value = cArray[len - 1].replace(/[\[\]]/g, "");
        const property = cArray.slice(0, len - 1).join("-"); // 去掉最后的
        css += `.${property}-\\[${value.replace(
          /#|%/g,
          "\\$&"
        )}\\] { ${property}: ${value.replace(/_/g, " ")}}\n`;
      }
    }
  });

  return css;
}
