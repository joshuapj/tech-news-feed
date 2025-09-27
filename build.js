const fs = require('fs');
const path = require('path');

// Read the template
const template = fs.readFileSync('index.template.html', 'utf8');

// Get environment variables
const supabaseUrl = process.env.SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'your-anon-key';

// Replace placeholders
const html = template
  .replace('SUPABASE_URL_PLACEHOLDER', supabaseUrl)
  .replace('SUPABASE_KEY_PLACEHOLDER', supabaseKey);

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Write the final HTML
fs.writeFileSync('dist/index.html', html);
console.log('Build complete!');