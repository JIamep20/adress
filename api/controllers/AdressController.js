

/**
 * AdressController
 *
 * @description :: Server-side logic for managing adresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // find: function(req, res) {
  //   Adress.find().populate('city')
  //     .then(function(items) {console.log(items); res.ok(items);})
  //     .catch(function(error) {console.log(error); res.ok(error);})
  //   ;
  // }

  getPaginated: function(req, res) {
    Adress.find().populate('city').paginate({page: req.query.page, limit: 50})
      .then(function(response) {res.ok(response);})
      .catch(function(err) {res.send(err, 500);});
  }
};

