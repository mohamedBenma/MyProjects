
const Objects = require('../models/object.model').model;
const fs = require('fs')

/**
 * achat d'in objet (suppression de 'l'objet en question de la bdd) 
 */
const buyItem = async (req, res) => {
  console.log("buy item")
  try {
    const data = await Objects.findById(req.params.objectId)
    const price = data.price
    await Objects.findByIdAndRemove(req.params.objectId).remove();
    res.status(201).json(price);
  }
  catch (error) {
    throw error;
  }
}
const objectData =
  async (req, res) => {
    try {

      const object = await Objects.findById(req.params.objectId);
      console.log(object)
      res.status(200).json(object);
    }
    catch (error) {
      res.status(400).json(error);
    }
  }
/**
 * trouver un objet en connaisant l'id de son propriétaire
 */
const list = async (req, res) => {
  try {
    const data = await Objects.find({ ownerId: { $ne: req.userId } })

    console.log(data)
    res.status(201).json(data);
  }
  catch (error) {
    res.status(400).json(error);
  }
}
/**
 * Ajout d'un objet à la base de données
 */
const create = async (req, res, _) => {
  console.log("ajout à la base de l'objet")
  console.log(req.id)
  const newObjectData = {
    ...req.body
  };
  try {
    const createdObject = await Objects.create(newObjectData);
    console.log("owner")
    console.log(createdObject.ownerId)
    res.status(201).json(createdObject);
  }
  catch (err) {
    console.log(`pb ajout de l'objet à la base de données ${err.message}`);
    res.status(409).json({ message: err.message });
  }
}
const createForm = (_, res) => res.redirect('/user.html');
module.exports.list = list;
module.exports.buyItem = buyItem;
module.exports.create = create;
module.exports.createForm = createForm;
module.exports.objectData = objectData;
