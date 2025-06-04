const https = require('https');
const fs = require('fs');
const path = require('path');

/**
 * Recursively fetch the directory structure of a GitHub repository.
 * @param {string} repoOwner - The GitHub username of the repository owner
 * @param {string} repoName - The name of the repository
 * @param {string} repoPath - The current path within the repository (for recursive calls)
 * @param {string} token - GitHub personal access token (optional, for private repos)
 * @returns {Promise<Object>} A nested object representing the directory structure
 */
function getDirectoryStructure(repoOwner, repoName, repoPath = "", token = null) {
    return new Promise((resolve, reject) => {
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Node.js GitHub Directory Fetcher'
        };
        
        if (token) {
            headers['Authorization'] = `token ${token}`;
        }

        // URL encode the path for the API request
        const encodedPath = repoPath ? encodeURIComponent(repoPath) : "";
        const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${encodedPath}`;
        
        console.log(url);

        const options = {
            hostname: 'api.github.com',
            path: `/repos/${repoOwner}/${repoName}/contents/${encodedPath}`,
            method: 'GET',
            headers: headers
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', async () => {
                if (res.statusCode !== 200) {
                    console.error(`Error fetching ${repoPath}: ${res.statusCode}`);
                    try {
                        console.error(JSON.parse(data));
                    } catch (e) {
                        console.error(data);
                    }
                    resolve({});
                    return;
                }

                try {
                    const contents = JSON.parse(data);
                    const structure = {};

                    // Process items sequentially to avoid rate limiting
                    for (const item of contents) {
                        if (item.type === "dir") {
                            // Recursively fetch directory contents
                            const subPath = repoPath ? path.join(repoPath, item.name) : item.name;
                            structure[item.name] = await getDirectoryStructure(repoOwner, repoName, subPath, token);
                        } else {
                            // For files, just store the name and size
                            if (item.name.endsWith('.html')) {
                                structure[item.name] = {
                                    type: "file",
                                    size: item.size,
                                    download_url: item.download_url
                                };
                            }
                        }
                    }

                    resolve(structure);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            console.error('Request error:', error);
            reject(error);
        });

        req.end();
    });
}

/**
 * Write the directory structure to a text file.
 * @param {Object} structure - The directory structure as returned by getDirectoryStructure
 * @param {fs.WriteStream} outputFile - An open file stream to write to
 * @param {string} currentPath - The current path (for recursive calls)
 */
function printDirectoryStructure(structure, outputFile, currentPath = "") {
    const sortedEntries = Object.entries(structure).sort(([a], [b]) => a.localeCompare(b));
    
    for (const [name, content] of sortedEntries) {
        const fullPath = currentPath ? path.join(currentPath, name) : name;
        
        if (typeof content === 'object' && content.type === "file") {
            // This is a file
            let processedPath = fullPath;
            if (processedPath.endsWith(".html")) {
                processedPath = processedPath.replace("islam-science", "").replace(".html", "");
            }
            outputFile.write(processedPath + "\n");
        } else if (typeof content === 'object') {
            // This is a directory
            printDirectoryStructure(content, outputFile, fullPath);
        }
    }
}

// Main execution
async function main() {
    const repoOwner = "GibreelAbdullah";
    const repoName = "islam-science-api";
    const outputFilename = "endpoints.txt";

    try {
        console.log("Fetching directory structure...");
        const structure = await getDirectoryStructure(repoOwner, repoName);
        
        // Write the structure to a text file
        const outputStream = fs.createWriteStream(outputFilename, { encoding: 'utf8' });
        
        printDirectoryStructure(structure, outputStream);
        
        outputStream.end();
        
        outputStream.on('finish', () => {
            console.log(`Directory structure has been saved to ${outputFilename}`);
        });
        
        outputStream.on('error', (error) => {
            console.error('Error writing file:', error);
        });
        
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the main function if this script is executed directly
if (require.main === module) {
    main();
}

module.exports = {
    getDirectoryStructure,
    printDirectoryStructure
};