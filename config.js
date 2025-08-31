const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iJ8QjISQ#jAtnrEAddY8S0oGth1U53LsLbdk7nCVY8xU9r8tklIA", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "postgresql://postgres:MGVwWesrHTECchIXVLgVYKXgjZrSlbCX@interchange.proxy.rlwy.net:52880/railway",  //ඔයාගෙ mongoDb url එක
};
 
