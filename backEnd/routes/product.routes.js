module.exports = app => {
    const products = require("../controllers/product.controller.js")

    var router = require("express").Router();

    // Create a new Product
  router.post("/", products.create);

  router.get("/", products.findAll);

   // Retrieve a single Product with id
  router.get("/:id", products.findOne);

  router.delete("/", products.deleteAll);


  app.use('/api/products', router);

  

}