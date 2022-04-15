const nongoose = require("mongoose");

const validateMongodbId = (id) => {
  const isValid = nongoose.Types.ObjectId.isValid(id);

  if (!isValid) throw new Error("The id is  not valid or found");
};

module.exports = validateMongodbId;
