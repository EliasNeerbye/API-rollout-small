module.exports = async (req, res, next) => {
    const logFilepath = process.env.LOG_FILE_PATH || 'server.log'; 
    const fs = require('fs');
    
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    
    fs.appendFile(logFilepath, logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    
    next();
}