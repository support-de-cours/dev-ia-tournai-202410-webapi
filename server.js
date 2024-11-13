require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/database');

const app = express();
const PORT = 3000;

connectDB();

app.use(express.urlencoded({extended: true}));

app.use('/api/v1/', require(path.join(__dirname, 'config/router')));

app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`));