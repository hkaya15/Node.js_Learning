const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const userId = req.user._id;

  // const product = new Product(null, title, imageUrl, description, price);
  // product.save().then(()=>{
  //   res.redirect('/');
  // }).catch(err=>{console.log(err)});

  const product = new Product(title,price,description,imageUrl,userId);

  product.save().then(result => {
    res.redirect('/');
    //console.log(result);
  }).catch(err => {
    //console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
    return res.redirect('/');
  }
  const productId = req.params.productId
  // Product.findByPk(productId)
  Product.findById(productId).then(product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product
    });
  }).catch(err => console.log(err));
};


exports.postEditProducts = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;

  
    const updateDoc = {
      $set: {
        title: updatedTitle,
        price: updatedPrice,
        imageUrl: updatedImageUrl,
        description: updatedDescription
      },
    };

  Product.update(prodId,updateDoc)
    .then(result => {
      console.log("Updated Product!")
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));

}

exports.getProducts = (req, res, next) => {
  //Product.findAll()
  
  Product.fetchAll().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
    .then(result => {
      console.log("Deleted Product!");
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));

};
