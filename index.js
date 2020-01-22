const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool, Client } = require('pg');

const connectionString = 'postgres://amin:123456789@localhost:5432/faceNoteBook'

const pool = new Pool({
    user: 'amin',
    host: 'localhost',
    database: 'faceNoteBook',
    password: '123456789',
    port: 5432,
});



app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/public'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    })

}

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/userRoutes')(app)


const port = process.env.PORT || 7744;

app.listen(port, () => console.log(`listening on port ${port}`))