const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/WhatsApp Image 2026-08-19 at 10.33.32 PM.jpeg');
const outputPathAvif = path.join(__dirname, '../public/donn-coaching-barbell.avif');

async function convert() {
  console.log('Converting', inputPath);
  await sharp(inputPath)
    .avif({ quality: 90 })
    .toFile(outputPathAvif);
  console.log('Successfully saved converted AVIF to', outputPathAvif);
}

convert().catch(err => {
  console.error('Error converting image:', err);
  process.exit(1);
});
