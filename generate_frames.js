const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, 'public', 'hero-sequence');
if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir, { recursive: true });
}

// 1x1 Transparent WEBP
const base64WebP = "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
const buffer = Buffer.from(base64WebP, 'base64');

for (let i = 1; i <= 242; i++) {
    const paddedNum = i.toString().padStart(4, '0');
    const fileName = `${paddedNum}.webp`;
    fs.writeFileSync(path.join(framesDir, fileName), buffer);
}

console.log("Successfully generated 242 placeholder webp frames.");
