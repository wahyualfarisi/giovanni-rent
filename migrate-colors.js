const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];
const fileExtensions = ['.tsx', '.ts', '.css'];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (fileExtensions.some(ext => file.endsWith(ext))) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

let allFiles = [];
directories.forEach(dir => {
  const fullDirPath = path.join(__dirname, dir);
  if (fs.existsSync(fullDirPath)) {
    allFiles = getAllFiles(fullDirPath, allFiles);
  }
});

const replacements = [
  // Fog -> bg-light
  { regex: /\bbg-fog\/[0-9]+\b/g, replacement: 'bg-bg-light' },
  { regex: /\bbg-fog\b/g, replacement: 'bg-bg-light' },
  { regex: /\btext-fog\/[0-9]+\b/g, replacement: 'text-bg-light' },
  { regex: /\btext-fog\b/g, replacement: 'text-bg-light' },
  { regex: /\bborder-fog\/[0-9]+\b/g, replacement: 'border-bg-light' },
  { regex: /\bborder-fog\b/g, replacement: 'border-bg-light' },
  { regex: /\bfrom-fog\b/g, replacement: 'from-bg-light' },
  { regex: /\bvia-fog\b/g, replacement: 'via-bg-light' },
  { regex: /\bto-fog\b/g, replacement: 'to-bg-light' },

  // Cloud -> bg-card
  { regex: /\bbg-cloud\b/g, replacement: 'bg-bg-card' },
  { regex: /\btext-cloud\b/g, replacement: 'text-bg-card' },
  { regex: /\bborder-cloud\b/g, replacement: 'border-bg-card' },

  // Soil -> text-primary for text, navy-border for bg/border
  { regex: /\btext-soil\/[0-9]+\b/g, replacement: 'text-text-muted' },
  { regex: /\btext-soil\b/g, replacement: 'text-text-primary' },
  { regex: /\bbg-soil\/[0-9]+\b/g, replacement: 'bg-navy-border' },
  { regex: /\bbg-soil\b/g, replacement: 'bg-navy-border' },
  { regex: /\bborder-soil\/[0-9]+\b/g, replacement: 'border-navy-border' },
  { regex: /\bborder-soil\b/g, replacement: 'border-navy-border' },
  { regex: /\bfrom-soil\/[0-9]+\b/g, replacement: 'from-navy-border' },
  { regex: /\bfrom-soil\b/g, replacement: 'from-navy-border' },
  { regex: /\bvia-soil\/[0-9]+\b/g, replacement: 'via-navy-border' },
  { regex: /\bvia-soil\b/g, replacement: 'via-navy-border' },
  { regex: /\bto-soil\/[0-9]+\b/g, replacement: 'to-navy-border' },
  { regex: /\bto-soil\b/g, replacement: 'to-navy-border' },

  // Sunrise -> burnt-orange (and deep-rust for hover/dark)
  { regex: /\bhover:bg-sunrise\/90\b/g, replacement: 'hover:bg-deep-rust' },
  { regex: /\bbg-sunrise\/[0-9]+\b/g, replacement: 'bg-burnt-orange' },
  { regex: /\bbg-sunrise\b/g, replacement: 'bg-burnt-orange' },
  { regex: /\btext-sunrise\b/g, replacement: 'text-burnt-orange' },
  { regex: /\bhover:text-sunrise\b/g, replacement: 'hover:text-burnt-orange' },
  { regex: /\bborder-sunrise\/[0-9]+\b/g, replacement: 'border-burnt-orange' },
  { regex: /\bborder-sunrise\b/g, replacement: 'border-burnt-orange' },
  { regex: /\bhover:border-sunrise\b/g, replacement: 'hover:border-burnt-orange' },
  { regex: /\bfrom-sunrise\/[0-9]+\b/g, replacement: 'from-burnt-orange' },
  { regex: /\bfrom-sunrise\b/g, replacement: 'from-burnt-orange' },
  { regex: /\bvia-sunrise\b/g, replacement: 'via-burnt-orange' },
  { regex: /\bto-sunrise\b/g, replacement: 'to-burnt-orange' },

  // Stone -> divider / text-muted
  { regex: /\bborder-stone\/[0-9]+\b/g, replacement: 'border-divider' },
  { regex: /\bborder-stone\b/g, replacement: 'border-divider' },
  { regex: /\btext-stone\/[0-9]+\b/g, replacement: 'text-text-muted' },
  { regex: /\btext-stone\b/g, replacement: 'text-text-muted' },
  { regex: /\bbg-stone\/[0-9]+\b/g, replacement: 'bg-divider' },
  { regex: /\bbg-stone\b/g, replacement: 'bg-divider' },

  // Moss / Crater -> vespa-blue
  { regex: /\btext-moss\b/g, replacement: 'text-vespa-blue' },
  { regex: /\bbg-moss\b/g, replacement: 'bg-vespa-blue' },
  { regex: /\btext-crater\b/g, replacement: 'text-vespa-blue' },
  { regex: /\bbg-crater\b/g, replacement: 'bg-vespa-blue' },
];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  replacements.forEach(r => {
    content = content.replace(r.regex, r.replacement);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
console.log('Migration complete.');
