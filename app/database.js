const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.PG_URL
});

// client.connect();

module.exports = pool;