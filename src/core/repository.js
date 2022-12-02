const mongoose = require("mongoose");

const coreRepository = {
  getOne: async (query, model) => {
    const data = await model.findOne(query);
    return data;
  },

  getById: async (id, model) => {
    const data = await model.findById(id);
    return data;
  },

  updateById: async (item, model) => {
    const data = await model.findByIdAndUpdate({ _id: item._id }, item);
    return data;
  },
};

module.exports = coreRepository;
