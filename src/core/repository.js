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
  save: async(item, modelName)=>{
    const model = new mongoose.models[modelName](item);
    const savedItem = await model.save();
    return savedItem;
  }
};

module.exports = coreRepository;
