// routes/bookRoutes.js
const express = require('express');
const router = express.Router();

const bookController = require('./../src/Controllers/BookController');
const userController = require('./../src/Controllers/UserController');

const securityMiddleware = require('./../src/Middlewares/SecurityMiddleware');

// Home

// Books
router.get(   '/books/'   , bookController.index);  // Liste des livres
router.post(  '/books/'   , securityMiddleware,     bookController.create); // Ajouter un livre
router.get(   '/books/:id', bookController.read);   // Voir les données d'un livre
router.put(   '/books/:id', bookController.update); // MAJ d'un livre
router.delete('/books/:id', bookController.delete); // Supprimer un livre

// User
router.post('/register' , userController.register);
router.post('/login'    , userController.login);
// router.get( '/profile'  , auth, userController.getUserProfile);


module.exports = router;