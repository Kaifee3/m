const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const srcDir = path.resolve(__dirname, '..', 'public', 'images', 'slide');
const outDir = path.resolve(__dirname, '..', 'public', 'optimized');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function optimize(file) {
  const inPath = path.join(srcDir, file);
  const outPath = path.join(outDir, file.replace(/\.(jpe?g|png)$/i, '.webp'));
  try {
    await sharp(inPath)
      .resize({ width: 1600 })
      .webp({ quality: 75 })
      .toFile(outPath);
    console.log('Optimized', file);
  } catch (err) {
    console.error('Failed', file, err.message);
  }
}

(async () => {
  const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const f of files) {
    await optimize(f);
  }
})();
