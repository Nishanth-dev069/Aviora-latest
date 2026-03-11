const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, 'public', 'frames');
if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir, { recursive: true });
}

// A valid 1x1 black JPEG
const base64Jpeg = "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=";
const buffer = Buffer.from(base64Jpeg, 'base64');

for (let i = 1; i <= 180; i++) {
    const paddedNum = i.toString().padStart(3, '0');
    const fileName = `c172-frame-${paddedNum}.jpg`;
    fs.writeFileSync(path.join(framesDir, fileName), buffer);
}

console.log("Successfully generated 180 placeholder frames.");
