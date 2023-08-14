import { Client } from ('pg');

const client= new Client({
    connectionString: process.env.URL,
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = client;