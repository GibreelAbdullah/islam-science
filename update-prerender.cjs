// update-prerender.js
const fs = require('fs');
const path = require('path');

// Read endpoints from endpoints.txt
function readEndpoints() {
  try {
    const endpointsPath = path.resolve(__dirname, 'endpoints.txt');
    const content = fs.readFileSync(endpointsPath, 'utf8');
    // Split by new lines and filter out empty lines
    return content.split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'));
  } catch (error) {
    console.error('Error reading endpoints.txt:', error);
    process.exit(1);
  }
}

// Escape special characters in string for JavaScript
function escapeJSString(str) {
  return str
    // .replace(/\\/g, '\\\\') // Escape backslashes first
    .replace(/'/g, "\\'")   // Escape single quotes
    // .replace(/"/g, '\\"')   // Escape double quotes
    // .replace(/\n/g, '\\n')  // Escape newlines
    // .replace(/\r/g, '\\r')  // Escape carriage returns
    // .replace(/\t/g, '\\t')  // Escape tabs
    // .replace(/\b/g, '\\b')  // Escape backspace
    // .replace(/\f/g, '\\f'); // Escape form feed
}

// Update svelte.config.js with new endpoints
function updateSvelteConfig() {
  const configPath = path.resolve(__dirname, 'svelte.config.js');
  try {
    // Read the current config file
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Get the endpoints
    const endpoints = readEndpoints();
    
    // Format the entries for prerender with proper escaping
    const prerenderEntries = endpoints.map(endpoint => {
      // Ensure endpoint starts with a slash
      const formattedEndpoint = '/islam-science' + (endpoint.startsWith('/') ? endpoint : `/${endpoint}`);
      // Escape any special characters
      const escapedEndpoint = escapeJSString(formattedEndpoint);
      return `'${escapedEndpoint}'`;
    }).join(',\n      ');
    
    // Create the new prerender section
    const newPrerenderSection = `prerender: {
    entries: [
      ${prerenderEntries}
    ]
  }`;
    
    // Replace the existing prerender section using regex
    const prerenderRegex = /prerender:\s*{[\s\S]*?entries:\s*\[[\s\S]*?\]\s*}/;
    
    if (prerenderRegex.test(configContent)) {
      // Replace existing prerender section
      configContent = configContent.replace(prerenderRegex, newPrerenderSection);
    } else {
      // Or add it to the kit config if it doesn't exist
      const kitConfigRegex = /(kit:\s*{[\s\S]*?)(}[\s\S]*?\n*};)/;
      configContent = configContent.replace(
        kitConfigRegex, 
        `$1,\n  ${newPrerenderSection}$2`
      );
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(configPath, configContent, 'utf8');
    console.log(`✅ Updated prerender entries in svelte.config.js with ${endpoints.length} endpoints`);
    
  } catch (error) {
    console.error('Error updating svelte.config.js:', error);
    process.exit(1);
  }
}

// Run the update
updateSvelteConfig();