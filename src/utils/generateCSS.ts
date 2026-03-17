import { DEFAULT_ANIMATION, PREDEFINED_KEYFRAMES } from "../animate/constant";
const PROPERTY_REGEX = /^([a-z-]+)-\[([^\]]+)\]$/;

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

// CSS值验证函数
const isValidCSSValue = (property: string, value: string): boolean => {
  // 空值检查
  if (!value || value.trim() === "") {
    return false;
  }

  // 移除下划线（用于多值分隔）后的值
  const normalizedValue = value.replace(/_/g, " ");

  // 通用危险字符检查
  const dangerousChars = /[<>\"\'`;{}]/;
  if (dangerousChars.test(normalizedValue)) {
    return false;
  }

  // 根据属性类型进行验证
  switch (property) {
    // 尺寸相关属性
    case "width":
    case "height":
    case "min-width":
    case "min-height":
    case "max-width":
    case "max-height":
    case "top":
    case "right":
    case "bottom":
    case "left":
      return /^(auto|0|\d+(\.\d+)?(px|rem|em|%|vh|vw|vmin|vmax)|calc\([^)]+\))$/i.test(normalizedValue);

    // 边距和填充
    case "margin":
    case "padding":
      return /^(auto|0|\d+(\.\d+)?(px|rem|em|%|vh|vw)|calc\([^)]+\))(\s+(auto|0|\d+(\.\d+)?(px|rem|em|%|vh|vw)|calc\([^)]+\)))*$/i.test(normalizedValue);

    // 颜色相关
    case "color":
    case "background-color":
    case "border-color":
    case "outline-color":
      return /^(transparent|currentColor|#[0-9a-f]{3,8}|rgb\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*\)|rgba\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*,\s*[01]?\d?\d?\s*\)|hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)|hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[01]?\d?\d?\s*\))$/i.test(normalizedValue);

    // 字体相关
    case "font-size":
      return /^(xx-small|x-small|small|medium|large|x-large|xx-large|smaller|larger|\d+(\.\d+)?(px|rem|em|%))$/i.test(normalizedValue);
    case "font-weight":
      return /^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i.test(normalizedValue);
    case "font-family":
      return /^[a-zA-Z\s,"']+$/i.test(normalizedValue);

    // 文本相关
    case "text-align":
      return /^(left|right|center|justify|start|end)$/i.test(normalizedValue);
    case "text-decoration":
      return /^(none|underline|overline|line-through|blink)$/i.test(normalizedValue);

    // 布局相关
    case "display":
      return /^(block|inline|inline-block|flex|inline-flex|grid|inline-grid|none|table|inline-table)$/i.test(normalizedValue);
    case "position":
      return /^(static|relative|absolute|fixed|sticky)$/i.test(normalizedValue);
    case "flex-direction":
      return /^(row|row-reverse|column|column-reverse)$/i.test(normalizedValue);
    case "justify-content":
      return /^(flex-start|flex-end|center|space-between|space-around|space-evenly)$/i.test(normalizedValue);
    case "align-items":
      return /^(stretch|flex-start|flex-end|center|baseline)$/i.test(normalizedValue);

    // 边框相关
    case "border":
    case "border-width":
      return /^(thin|medium|thick|\d+(\.\d+)?(px|rem|em))$/i.test(normalizedValue);
    case "border-style":
      return /^(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)$/i.test(normalizedValue);

    // 背景相关
    case "background":
      // 简化的背景验证
      return normalizedValue.length <= 200; // 限制长度防止滥用

    // 动画相关
    case "animation":
      return /^[a-zA-Z-]+\s+(\d+(\.\d+)?(s|ms))?\s*([a-zA-Z-]+)?\s*(\d+)?\s*([a-zA-Z-]+)?$/i.test(normalizedValue);

    // 变换相关
    case "transform":
      return /^(none|translate(X|Y|Z|3d)?\([^)]+\)|rotate(X|Y|Z)?\([^)]+\)|scale(X|Y|Z)?\([^)]+\)|skew(X|Y)?\([^)]+\)|matrix(3d)?\([^)]+\))(\s+(translate(X|Y|Z|3d)?\([^)]+\)|rotate(X|Y|Z)?\([^)]+\)|scale(X|Y|Z)?\([^)]+\)|skew(X|Y)?\([^)]+\)|matrix(3d)?\([^)]+\)))*$/i.test(normalizedValue);

    // 默认情况：基本的安全检查
    default:
      // 对于未知属性，进行基本的安全检查
      return normalizedValue.length <= 100 && 
             !dangerousChars.test(normalizedValue) &&
             /^[a-zA-Z0-9\s#%().,_-]+$/i.test(normalizedValue);
  }
};

const isValidCssName = (name: string): boolean => {
  return VALID_CSS_PROPERTIES.some(
    (prop) => prop === name || name.startsWith(prop + "-")
  );
};

// 生成CSS规则
export function generateCSS(classNames: string[]): string {
  const cssParts: string[] = [];
  const usedKeyframes = new Set<string>();
  classNames.forEach((cName) => {
    // 优选判断是否是状态类Hover, focus, and other states
    const stateCls = cName.split(":");
    let cls = stateCls[0];
    let stateName = "";
    if (stateCls.length === 2) {
      cls = stateCls[1];
      stateName = stateCls[0];
    }

    const propertyMatch = cls.match(PROPERTY_REGEX);
    if (!propertyMatch) {
      return;
    }
    const [, propertyPrefix, value] = propertyMatch;

    if (propertyPrefix === "animation") {
      // 处理动画类，如animation[fade-in_1s_linear_infinite]

      const vList = value.split("_");
      // 获取动画名称
      const name = vList[0];

      if (PREDEFINED_KEYFRAMES[name as keyof typeof PREDEFINED_KEYFRAMES]) {
        // 添加关键帧（如果未使用过）
        if (!usedKeyframes.has(name)) {
          cssParts.push(
            PREDEFINED_KEYFRAMES[name as keyof typeof PREDEFINED_KEYFRAMES]
          );
          usedKeyframes.add(name);
        }

        const cssValue =
          vList.length > 1
            ? vList.join(" ")
            : DEFAULT_ANIMATION[name as keyof typeof DEFAULT_ANIMATION];

        const escapedName = cls.replace(/([#%.()\[\]{}:;])/g, "\\$1");

        if (stateName) {
          cssParts.push(
            `.${stateName}\\:${escapedName}:${stateName} { animation: ${cssValue} }`
          );
        } else {
          cssParts.push(`.${escapedName} { animation: ${cssValue} }`);
        }
      }
    } else if (propertyMatch) {
      // 验证CSS属性
      if (
        isValidCssName(propertyPrefix) &&
        isValidCSSValue(propertyPrefix, value)
      ) {
        const escapedName = cls.replace(/([#%.()\[\]{}:;])/g, "\\$1");
        const cssValue = value.replace(/_/g, " ");
        if (stateName) {
          cssParts.push(
            `.${stateName}\\:${escapedName}:${stateName} { ${propertyPrefix}: ${cssValue} }`
          );
        } else {
          cssParts.push(`.${escapedName} { ${propertyPrefix}: ${cssValue} }`);
        }
      }
    }
  });

  return cssParts.join("\n");
}