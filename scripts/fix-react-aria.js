const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, '..', 'node_modules', '@react-aria', 'utils', 'dist'),
  path.join(__dirname, '..', 'node_modules', '@react-stately', 'utils', 'dist'),
];

targetDirs.forEach((targetDir) => {
  if (fs.existsSync(targetDir)) {
    const files = fs.readdirSync(targetDir);
    files.forEach((file) => {
      if (file.endsWith('.module.js')) {
        const mjsName = file.replace(/\.module\.js$/, '.mjs');
        const mjsPath = path.join(targetDir, mjsName);
        if (!fs.existsSync(mjsPath)) {
          fs.copyFileSync(path.join(targetDir, file), mjsPath);
          console.log(`Created ${mjsName}`);
        }
      }
    });
  }
});
