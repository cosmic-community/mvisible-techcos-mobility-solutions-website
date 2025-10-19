import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// Read the console capture script
const scriptContent = readFileSync('public/dashboard-console-capture.js', 'utf-8');

// HTML to inject
const scriptTag = `<script>${scriptContent}</script>`;

// Recursively find all HTML files in dist
function findHtmlFiles(dir) {
  const files = [];
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Inject script into all HTML files
const htmlFiles = findHtmlFiles('dist');

htmlFiles.forEach(file => {
  let content = readFileSync(file, 'utf-8');
  
  // Only inject if not already present
  if (!content.includes('dashboard-console-capture')) {
    // Inject before closing </head> tag
    content = content.replace('</head>', `${scriptTag}\n</head>`);
    writeFileSync(file, content);
    console.log(`✅ Injected console capture into: ${file}`);
  }
});

console.log(`✅ Console capture script injection complete! (${htmlFiles.length} files processed)`);