const Book = require('./../Models/BookModel');

// Lire tous les livres
exports.index = async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};


// Créer un nouveau livre
exports.create = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Lire un livre par ID
exports.read = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Mettre à jour un livre par ID
exports.update = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Supprimer un livre par ID
exports.delete = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
    res.json({ message: 'Livre supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
