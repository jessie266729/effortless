import fs from "fs";
import path from "path";

// 提取文件中的className属性
export function extractClassNames(fileContent: string): string[] {
  const classNames = new Set<string>();

  // 匹配JSX/TSX中的className属性
  const classNameRegex = /className=["']([^"']*)["']/g;
  let match: RegExpExecArray | null;
  while ((match = classNameRegex.exec(fileContent)) !== null) {
    const classes = match[1].split(/\s+/).filter(Boolean);
    classes.forEach((cls) => classNames.add(cls));
  }

  // 匹配普通HTML中的class属性
  const classRegex = /class=["']([^"']*)["']/g;
  while ((match = classRegex.exec(fileContent)) !== null) {
    const classes = match[1].split(/\s+/).filter(Boolean);
    classes.forEach((cls) => classNames.add(cls));
  }

  return Array.from(classNames);
}

// 扫描所有文件并提取className
export function scanAllFiles(directory: string): string[] {
  const classNames = new Set<string>();

  function scanDir(dir: string): void {
    try {
      const files = fs.readdirSync(dir);
      files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          if (
            file !== "node_modules" &&
            file !== ".umi" &&
            file !== ".umi-production"
          ) {
            scanDir(filePath);
          }
        } else {
          const ext = path.extname(file);
          if ([".js", ".jsx", ".ts", ".tsx", ".html"].includes(ext)) {
            try {
              const content = fs.readFileSync(filePath, "utf8");
              const classes = extractClassNames(content);
              classes.forEach((cls) => classNames.add(cls));
            } catch (error) {
              console.warn(
                `Skipping unreadable file ${filePath}:`,
                (error as Error).message
              );
            }
          }
        }
      });
    } catch (error) {
      console.error(`Error scanning directory ${dir}:`, error);
    }
  }

  scanDir(directory);
  return Array.from(classNames);
}

// 获取所有扫描的文件路径
export function getScannedFiles(directory: string): string[] {
  const files: string[] = [];

  function scanDir(dir: string): void {
    try {
      const dirFiles = fs.readdirSync(dir);
      dirFiles.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          if (
            file !== "node_modules" &&
            file !== ".umi" &&
            file !== ".umi-production"
          ) {
            scanDir(filePath);
          }
        } else {
          const ext = path.extname(file);
          if ([".js", ".jsx", ".ts", ".tsx", ".html"].includes(ext)) {
            files.push(filePath);
          }
        }
      });
    } catch (error) {
      console.error(`Error scanning directory ${dir}:`, error);
    }
  }

  scanDir(directory);
  return files;
}
