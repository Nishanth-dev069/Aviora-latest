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

const cssToInject = `
  /* INJECTED HERO FIXES */
  .hero {
    min-height: auto !important;
    padding: 0 !important;
    display: flex !important;
    flex-direction: column !important;
  }
  .heroBg, .heroBgWrap {
    position: relative !important;
    width: 100% !important;
    aspect-ratio: 16 / 9 !important;
    min-height: 220px !important;
    overflow: hidden !important;
  }
  .heroContent {
    padding: 60px 20px 48px !important;
    margin: 0 !important;
  }
  .heroH1 {
    font-size: clamp(28px, 7vw, 40px) !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }
`;

function processFile(filePath) {
  if (!filePath.endsWith('.module.css')) return;
  if (filePath.includes('admissions.module.css') || filePath.includes('home.module.css') || filePath.includes('programs.module.css') || filePath.includes('about.module.css')) {
    return; // skip these
  }

  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('.hero {') && !content.includes('.heroBg') && !content.includes('.heroH1')) {
    return; // no hero here
  }

  // Find @media (max-width: 768px) block
  const regex = /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{/g;
  let match;
  let lastMatchIndex = -1;
  while ((match = regex.exec(content)) !== null) {
    lastMatchIndex = match.index;
  }

  if (lastMatchIndex !== -1) {
    // Find the closing brace for this media query
    let braceCount = 0;
    let foundStart = false;
    let closingIndex = -1;
    for (let i = lastMatchIndex; i < content.length; i++) {
      if (content[i] === '{') {
        braceCount++;
        foundStart = true;
      } else if (content[i] === '}') {
        braceCount--;
      }
      if (foundStart && braceCount === 0) {
        closingIndex = i;
        break;
      }
    }

    if (closingIndex !== -1) {
      content = content.slice(0, closingIndex) + cssToInject + content.slice(closingIndex);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Injected into', filePath);
    }
  } else {
    // Append a new media query
    content += `\n@media (max-width: 768px) {\n${cssToInject}\n}\n`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Appended to', filePath);
  }
}

walkDir('c:/Users/Nishanth/Desktop/Aviora-latest/src/app', processFile);
