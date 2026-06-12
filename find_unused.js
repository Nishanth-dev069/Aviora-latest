const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, 'public');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const allPublicFiles = getFiles(publicDir);

const unused = [];

allPublicFiles.forEach(file => {
  const relPath = file.replace(publicDir, '').replace(/\\/g, '/');
  
  // Ignore favicons, manifest, robots, sitemap, next.svg, vercel.svg
  if (relPath.includes('favicon') || relPath.includes('icon-') || relPath.includes('manifest') || relPath.includes('robots') || relPath.includes('sitemap') || relPath.includes('browserconfig') || relPath.includes('ms-icon') || relPath.includes('apple-icon') || relPath.includes('next.svg') || relPath.includes('vercel.svg') || relPath.includes('icon.png')) {
    return;
  }
  
  try {
    const searchName = path.basename(relPath);
    // Grep in src/
    // -r = recursive, -l = file names only, -q = quiet
    execSync(`findstr /S /M /C:"${searchName}" src\\*.*`);
  } catch (e) {
    // findstr returns non-zero if not found
    try {
      // Also check tina/
      execSync(`findstr /S /M /C:"${searchName}" tina\\*.*`);
    } catch(e2) {
      unused.push(file);
    }
  }
});

console.log("Unused files to delete:");
unused.forEach(f => console.log(f));
