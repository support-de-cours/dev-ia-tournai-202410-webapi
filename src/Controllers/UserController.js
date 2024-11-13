require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./../Models/UserModel');

// Inscription de l'utilisateur
exports.register = async (req, res) => {
    try {
        const { 
            firstname, 
            lastname, 
            email, 
            password
        } = req.body;
    
        user = new User({
            firstname,
            lastname,
            email,
            password
        });
        await user.save();
    
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {

        res.status(400).json({ message: error.message });
    }
};

// Connexion de l'utilisateur
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        // Génération du JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
