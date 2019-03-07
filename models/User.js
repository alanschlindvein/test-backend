const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    docNumber: String,
    out: Boolean
  },
  { versionKey: false }
);

userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
};

module.exports = mongoose.model("User", userSchema);
