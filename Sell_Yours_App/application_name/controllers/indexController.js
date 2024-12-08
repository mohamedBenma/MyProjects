module.exports.home =
  (req, res) => res.redirect('./register.html');

module.exports.about =
    (req, res) => res.render('about');

module.exports.adminonly =
    (req, res) => res.render('adminonly');
 