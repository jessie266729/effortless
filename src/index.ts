import path from "path";
import { getScannedFiles, scanAllFiles } from "./utils/tools";
import postcss from "postcss";
import { VALID_CSS_PROPERTIES, generateCSS } from "./utils/generateCSS";
import { DEFAULT_ANIMATION, PREDEFINED_KEYFRAMES } from "./animate/constant";
const effortlesscss = () => {
  return {
    postcssPlugin: "effortlesscss",

    async Once(root: any, { result }: { result: any }) {
      try {
        // 确定项目根目录
        const projectRoot = path.resolve(process.cwd(), "src/");

        // 扫描所有文件
        const classNames = scanAllFiles(projectRoot);

        // 生成CSS
        // const css = generateCSS(classNames);
        let css = "";
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

          // 先判断是否为动画类
          if (cls.startsWith("animation-[")) {
            // 处理动画类，如animation[fade-in_1s_linear_infinite]
            const value = cls.replace("animation-[", "").replace("]", "");
            const vList = value.split("_");
            const name = vList[0];
            if (
              PREDEFINED_KEYFRAMES[name as keyof typeof PREDEFINED_KEYFRAMES]
            ) {
              if (!usedKeyframes.has(name)) {
                css +=
                  PREDEFINED_KEYFRAMES[
                    name as keyof typeof PREDEFINED_KEYFRAMES
                  ] + "\n";
                usedKeyframes.add(name);
              }
              if (stateName) {
                css += `.${stateName}\\:${cls.replace(
                  /[\[\]]/g,
                  "\\$&"
                )}:${stateName} { animation: ${
                  vList.length > 1
                    ? vList.join(" ")
                    : DEFAULT_ANIMATION[name as keyof typeof DEFAULT_ANIMATION]
                } }\n`;
              } else {
                css += `.${cls.replace(/[\[\]]/g, "\\$&")} { animation: ${
                  vList.length > 1
                    ? vList.join(" ")
                    : DEFAULT_ANIMATION[name as keyof typeof DEFAULT_ANIMATION]
                } }\n`;
              }
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
              if (stateName) {
                css += `.${stateName}\\:${property}-\\[${value.replace(
                  /#|%/g,
                  "\\$&"
                )}\\]:${stateName} { ${property}: ${value.replace(
                  /_/g,
                  " "
                )}}\n`;
              } else {
                css += `.${property}-\\[${value.replace(
                  /#|%/g,
                  "\\$&"
                )}\\] { ${property}: ${value.replace(/_/g, " ")}}\n`;
              }
            }
          }
        });

        // 获取所有扫描的文件路径
        const scannedFiles = getScannedFiles(projectRoot);

        // 只在开发环境中注册文件依赖（支持热更新）
        const isDevelopment =
          process.env.NODE_ENV === "development" ||
          process.env.NODE_ENV === undefined;

        if (isDevelopment) {
          scannedFiles.forEach((file) => {
            result.messages.push({
              type: "dependency",
              plugin: "effortlesscss",
              file: path.resolve(file),
              parent: result.opts.from,
            });
          });
        }

        // 注入CSS到PostCSS结果中
        root.removeAll();
        root.append(postcss.parse(css));
      } catch (error) {
        console.error("EffortlessCSS error:", error);
      }
    },
  };
};

// 标识为PostCSS插件
(effortlesscss as any).postcss = true;

export default effortlesscss;
