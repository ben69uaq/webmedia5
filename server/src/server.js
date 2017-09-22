const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

const PORT = 5000;
const DEBUG = true;

const MIME = {
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.woff': 'application/font-woff',
	'.png': 'image/png',
	'.json': 'application/json',
	'.mp3': 'audio/mp3'
};

http.createServer(function (request, response) {
	
	response.setHeader('Access-Control-Allow-Origin', '*');
	var parsedUrl = url.parse(request.url); // Parse url
	
	if(parsedUrl.pathname == '/') {
		parsedUrl.pathname = '/index.html'; // Set default url
	}
	
	var flag = true; // Flag is set to false once a response is sent
	var extention = String(path.extname(parsedUrl.pathname)).toLowerCase(); // Get url extention
	
	if(extention) { // Serve file
		
		if(MIME[extention]) { // File format supported
			
			switch(extention) { // Define file path
				case '.json':
				case '.mp3':
					var root = '../data';
					break;
				default:
					var root = '../client/build';
					break;
			}
			
			var pathFile = (root + decodeURI(parsedUrl.pathname)); // Serve supported file
			
			if(fs.existsSync(pathFile)) { // File exists
				flag = false;
				
				fs.readFile(pathFile, (error, content) => {
					if(DEBUG){ console.log('[server.js] Read file -> ' + pathFile) };
					
					if (error) { // Error while reading file
						response.writeHead(500);
						response.end(http.STATUS_CODES[500]);
					}
					else { // Send file content
						var stats = fs.statSync(pathFile);
						response.writeHead(200, { 'Content-Type': MIME[extention], 'Content-Length': stats.size, 'Accept-Ranges': 'bytes' });
						response.end(content, 'utf-8');
					}
				});
			}
		}
	}
	else { // Serve API
	
		var urlPath = parsedUrl.pathname.split('/'); // Parse url
		urlPath.shift(); //Remove empty first value
		
		switch(urlPath.shift().toLowerCase()) { // Define file path
			case 'music':
			case 'playlist':
				var pathDir = '../data' + decodeURI(parsedUrl.pathname);
				
				if(fs.existsSync(pathDir)) { // Directory exists
					flag = false;
					
					fs.readdir(pathDir, (error, files) => {
						if(DEBUG){ console.log('[server.js] Read folder -> ' + pathDir) };
							
						if (error) { // Error while reading directory
							response.writeHead(500);
							response.end(http.STATUS_CODES[500]);
						}
						else { // Send directory content
							response.writeHead(200, { 'Content-Type': 'application/json' });
							response.end(JSON.stringify(files), 'utf-8');
						}
					});
				}
				break;
		}
	}
	
	if(flag) { // Send not found
		response.writeHead(404);
		response.end(http.STATUS_CODES[404]);
	}
}).listen(process.env.PORT || PORT);

console.log('[server.js] Server running on port: ' + PORT);