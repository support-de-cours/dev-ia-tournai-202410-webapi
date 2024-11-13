// routes/bookRoutes.js
const express = require('express');
const router = express.Router();

const bookController = require('./../src/Controllers/BookController');
const userController = require('./../src/Controllers/UserController');

// Home

// Books
router.get('/books/', bookController.index);            // Liste des livres
router.post('/books/', bookController.create);          // Ajouter un livre
router.get('/books/:id', bookController.read);          // Voir les données d'un livre
router.put('/books/:id', bookController.update);        // MAJ d'un livre
router.delete('/books/:id', bookController.delete);     // Supprimer un livre

// User



module.exports = router;