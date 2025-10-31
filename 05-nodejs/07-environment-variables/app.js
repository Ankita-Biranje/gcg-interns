require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;

console.log('DB Host:', dbHost);
console.log('DB User:', dbUser);
console.log('DB Pass:', dbPass);
console.log('API Key:', apiKey);
console.log('Port:', port);
