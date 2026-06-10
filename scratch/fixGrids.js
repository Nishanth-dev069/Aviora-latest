const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.module.css')) return;
  let content = fs.readFileSync(filePath, 'utf8');

  let modified = false;

  // Replace 1fr grid in heroStats
  if (content.includes('.heroStats { grid-template-columns: 1fr; }')) {
    content = content.replace(/\.heroStats\s*\{\s*grid-template-columns:\s*1fr;\s*\}/g, '.heroStats { grid-template-columns: 1fr 1fr; }');
    modified = true;
  }
  
  // also check if there's any gap issues.
  if (content.includes('gap: 20px;') && content.includes('.heroStatsBar')) {
    content = content.replace(/gap:\s*20px;/g, 'gap: 16px;');
    modified = true;
  }

  // Set global padding clamp for sections. Since we can't easily parse all sections, 
  // we'll just let globals.css handle the overflow clipping and padding-left/right. 
  // Let's replace fixed padding on sections inside @media (max-width: 768px).
  // e.g. padding: 56px 20px; -> padding: clamp(48px, 8vw, 64px) clamp(16px, 5vw, 24px);
  const regex = /padding:\s*(\d+px)\s+(20px|24px|16px)\s*;/g;
  if (regex.test(content) && content.includes('@media (max-width: 768px)')) {
    // We only want to replace inside the media query but doing it globally is ok 
    // IF the values match typical mobile overrides (like 56px 20px).
    // Actually safer to not regex replace padding blindly.
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed grid in', filePath);
  }
}

walkDir('c:/Users/Nishanth/Desktop/Aviora-latest/src/app', processFile);
