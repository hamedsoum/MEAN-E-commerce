const db = require("../models");
const Product = db.products;

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
  

  // Create a Tutorial
  const product = new Product({
    name: req.body.name,
    categoryName: req.body.categoryName,
    image: req.body.image,
    description : req.body.description,
    prix : req.body.prix,
    qty : req.body.qty
  });

  // Save product in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

};

exports.deleteAll = (req, res) => {
  Product.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

exports.findAll = (req, res) => {
  Product.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// obtenir un seul produit 

exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving product  with id=" + id });
    });
};

