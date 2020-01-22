const { Pool, Client } = require('pg');
const pool = new Pool({
    user: 'amin',
    host: 'localhost',
    database: 'faceNoteBook',
    password: '123456789',
    port: 5432,
});

module.exports.pool = pool;