import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function downloadScreens() {
  try {
    const listFile = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\0443d353-4fc5-44ae-819c-ae6d125c8d59\\.system_generated\\steps\\18\\output.txt';
    const rawData = fs.readFileSync(listFile, 'utf8');
    const data = JSON.parse(rawData);

    const outDir = path.join(__dirname, 'html');
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    console.log(`Starting download of ${data.screens.length} screens...`);

    for (const screen of data.screens) {
      const title = screen.title.replace('FitForge | ', '').trim();
      const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '.html';
      const filepath = path.join(outDir, filename);

      console.log(`Downloading "${screen.title}" -> ${filename}...`);
      const response = await fetch(screen.htmlCode.downloadUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${screen.title}: ${response.statusText}`);
      }
      const html = await response.text();
      fs.writeFileSync(filepath, html, 'utf8');
      console.log(`Saved ${filename}`);
    }

    console.log('All downloads completed successfully!');
  } catch (error) {
    console.error('Error during download:', error);
  }
}

downloadScreens();
