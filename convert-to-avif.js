const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const exts = ['.jpeg', '.jpg', '.png', '.webp'];

async function convertAll() {
  const files = fs.readdirSync(publicDir).filter(f => exts.includes(path.extname(f).toLowerCase()));
  
  for (const file of files) {
    const inputPath = path.join(publicDir, file);
    const baseName = path.basename(file, path.extname(file));
    const outputPath = path.join(publicDir, baseName + '.avif');
    
    if (fs.existsSync(outputPath)) {
      console.log(`⏭  Already exists: ${baseName}.avif`);
      continue;
    }

    try {
      await sharp(inputPath)
        .avif({ quality: 80, effort: 6 })
        .toFile(outputPath);
      const inSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
      const outSize = (fs.statSync(outputPath).size / 1024).toFixed(1);
      console.log(`✅ ${file} → ${baseName}.avif  (${inSize}KB → ${outSize}KB)`);
    } catch (e) {
      console.error(`❌ Failed: ${file}`, e.message);
    }
  }
  console.log('\nDone! All images converted to AVIF.');
}

convertAll();
