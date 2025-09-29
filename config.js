const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'SANIJA-MD=yM0jTRQT#wy-MNWRdKh2B3WYKyJFQH4k1GYvDXS1pbcolv8cOTZ8' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'sanijamd' : process.env.SESSION_NAME, 

};

