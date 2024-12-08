const User = require('../models/user.model').model;
module.exports.home = (_, res) => res.redirect('/user.html');

module.exports.me =
  async (req, res) => {
    const user = await User.findById(req.userId);
    console.log(user);
    console.log(req.userId);
    console.log("test");
    res.status(200).json({ login: user.login, budget: user.budget });
  }

module.exports.update =
  async (req, res) => {
    const id = req.userId
    const updatedData = { ...req.body };
    console.log(updatedData);
    const user = await User.findByIdAndUpdate(req.userId,
      updatedData,
      { new: true });
    res.status(200).json({ login: user.login, userId: id, budget: user.budget });
  }
module.exports.setBuyerBudget =
  async (req, res) => {
    let buyer = await User.findById(req.userId);
    console.log(buyer)
    let seller = await User.findById(req.params.sellerId);
    console.log(seller)
    try {
      console.log(req.params.price)
      buyer.budget = Number(buyer.budget) - Number(req.params.price);
      seller.budget = Number(seller.budget) + Number(req.params.price);
      buyer = await buyer.save();
      seller = await seller.save();
      res.status(201).json(buyer);
    }
    catch (error) {
      res.status(400).json(error);
    }
  }
module.exports.setSellerBudget =
  async (req, res) => {
    async (req, res) => {
      let user = await User.findById(req.params.sellerId);
      try {
        user.budget = user.budget + req.params.price;
        user = await user.save();
        res.status(201).json(user);
      }
      catch (error) {
        res.status(400).json(error);
      }

    }
  }


