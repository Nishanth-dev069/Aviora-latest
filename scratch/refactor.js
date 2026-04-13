const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '../src');

const replacements = {
  // Hex mappings -> new vars
  '#FDFAF5': 'var(--color-primary)',
  '#FFFFFF': 'var(--color-surface)',
  '#F5F1EA': 'var(--color-primary)',
  '#050E2D': 'var(--color-accent)',
  '#0A2472': 'var(--color-accent)',
  '#1E90FF': 'var(--color-secondary)',
  '#4FC3F7': 'var(--color-secondary)',
  '#C9A84C': 'var(--color-secondary)',
  '#D4B96A': 'var(--color-secondary)',
  '#A07830': 'var(--color-secondary)',
  '#0D0D0D': 'var(--color-text-dark)',
  '#3A3A4A': 'var(--color-text-dark)',

  // Legacy variables mapping
  'var(--bg-base)': 'var(--color-primary)',
  'var(--bg-surface)': 'var(--color-surface)',
  'var(--bg-panel)': 'var(--color-primary)',
  'var(--bg-dark)': 'var(--color-accent)',
  'var(--bg-deep)': 'var(--color-accent)',
  'var(--accent-primary)': 'var(--color-accent)',
  'var(--accent-secondary)': 'var(--color-secondary)',
  'var(--accent-highlight)': 'var(--color-secondary)',
  
  'var(--gold)': 'var(--color-secondary)',
  'var(--gold-l)': 'var(--color-secondary)',
  'var(--gold-dark)': 'var(--color-secondary)',
  'var(--gold-line)': 'rgba(100, 145, 222, 0.25)',
  'var(--gold-bg)': 'rgba(100, 145, 222, 0.08)',
  'var(--gold-bg-hover)': 'rgba(100, 145, 222, 0.15)',
  'var(--gold-dim)': 'rgba(100, 145, 222, 0.30)',
  'var(--gold-glow)': 'rgba(100, 145, 222, 0.10)',

  'var(--text-pri)': 'var(--color-text-dark)',
  'var(--text-body)': 'var(--color-text-dark)',
  'var(--text-primary)': 'var(--color-text-dark)',
  'var(--text-inv)': 'var(--color-text-light)',
  'var(--ink-light)': 'var(--color-text-light)',

  'var(--bg)': 'var(--color-primary)',
  'var(--bg-card)': 'var(--color-surface)',
  'var(--bg-2)': 'var(--color-accent)',
  'var(--ink)': 'var(--color-text-dark)',
  'var(--navy)': 'var(--color-accent)',
};

function processRecursive(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processRecursive(fullPath);
    } else {
      if (fullPath.endsWith('.css') || fullPath.endsWith('.tsx')) {
        let content = fs.readFileSync(fullPath, 'utf-8');
        let originalContent = content;

        // Apply replacements
        for (const [key, value] of Object.entries(replacements)) {
          // Replace all occurrences (case insensitive for hex)
          if (key.startsWith('#')) {
            const regex = new RegExp(key, 'gi');
            content = content.replace(regex, value);
          } else {
            const regex = new RegExp(key.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g');
            content = content.replace(regex, value);
          }
        }

        // Clean console logs from TSX
        if (fullPath.endsWith('.tsx')) {
          content = content.replace(/console\.log\(.*?\);?/g, '');
        }

        // Clean font sizes < 14px in CSS
        if (fullPath.endsWith('.css')) {
          content = content.replace(/font-size:\s*(\d+)px/g, (match, size) => {
            const val = parseInt(size, 10);
            if (val < 14) return 'font-size: 14px';
            return match;
          });
        }

        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content);
          console.log(`Updated: ${fullPath}`);
        }
      }
    }
  }
}

processRecursive(projectDir);
console.log("Refactoring complete.");
