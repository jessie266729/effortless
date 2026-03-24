import path from "path";
import { getScannedFiles, scanAllFiles } from "./utils/tools";
import postcss from "postcss";
import { generateCSS } from "./utils/generateCSS";

const effortlesscss = () => {
  return {
    postcssPlugin: "effortless",

    async Once(root: any, { result }: { result: any }) {
      try {
        // 确定项目根目录
        const projectRoot = path.resolve(process.cwd(), "src/");

        // 扫描所有文件
        const classNames = scanAllFiles(projectRoot);

        // 生成CSS
        const css = generateCSS(classNames);

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
              plugin: "effortless",
              file: path.resolve(file),
              parent: result.opts.from,
            });
          });
        }

        // 注入CSS到PostCSS结果中
        // root.removeAll();
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
