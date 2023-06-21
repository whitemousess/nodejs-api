const MainModel = require("../models/itemsModel");

module.exports = {

  listItems: (params, options) => {
    // sort
    let sort = {};
    // search for items
    let objWhere = {};

    // search for items
    if (params.keyword !== '') objWhere.name = new RegExp(params.keyword, 'i');
    // sort
    if (params.sortField) sort[params.sortField] = params.sortType;


    // get all values
    if (options.task == "all") {
      return MainModel.find(objWhere).select("id name status")
      .sort(sort)
    }
    // get one value by ID
    if (options.task == "one") {
      return MainModel.find({id : params.id})
      .select("id name status");
    }
  },

    // add a new item
  create: (item) => {
    return new MainModel(item).save();
  },

    // delete item by ID
  deleteItem: (params, options) => {
    if (options.task == "one") {
      return MainModel.deleteOne({id : params.id})
    }
  },

    // Edit value bt id
  editItem: (params, options) => {
    if (options.task == "edit") {
      return MainModel.
      updateOne({id : params.id}, params.body);
    }
  }

};