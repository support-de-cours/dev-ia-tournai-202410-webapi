require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/database');

const app = express();
const PORT = 3000;

connectDB();

// Analyse le contenu JSON dans le corps de la requete
app.use(express.json());

// Analyse le contenu du formulaire dans le corps de la requete
// app.use(express.urlencoded({extended: true}));

app.use('/api/v1/', require(path.join(__dirname, 'config/router')));

app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`));