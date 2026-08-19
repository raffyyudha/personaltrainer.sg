const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/no1personaltraining.jpeg');
const outputPathAvif1 = path.join(__dirname, '../public/onepersonaltraining.avif');
const outputPathAvif2 = path.join(__dirname, '../public/no1personaltraining.avif');

async function convert() {
  console.log('Converting', inputPath);
  await sharp(inputPath)
    .avif({ quality: 90 })
    .toFile(outputPathAvif1);
  console.log('Successfully saved to', outputPathAvif1);

  await sharp(inputPath)
    .avif({ quality: 90 })
    .toFile(outputPathAvif2);
  console.log('Successfully saved to', outputPathAvif2);
}

convert().catch(err => {
  console.error('Error converting image:', err);
  process.exit(1);
});
