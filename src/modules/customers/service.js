const User = require("./model");
const bcryptjs = require("bcryptjs");
const { getById } = require("../../core/repository");
const User = require("./model");

const checkUserExists = async (req, res) => {
  try {
    if (req.body) {
      const user = await getById(req.body, model);
      if (!user) {
        return res
          .status(422)
          .send({ status: "Error", message: "User does not exist" });
      }
    }
    return res
      .status(200)
      .send({ status: "Success", message: "User does not exist" });
  } catch (error) {}
}

async function getPasswordHash(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

const createUser = async (user) => {
  const passwordHash = await getPasswordHash(user.password);
  const { _id } = await save({ passwordHash, ...user }, ModelName);
  return _id;
}

const tryCreateUser = async (user) => {
  const { phone, email, user } = user;
  const query = {
    $or: [{ phone }, { email }, { username }],
  };
  const item = await User.findOne(query);
  if (item) {
    return false;
  }
  const id = await createUser(user);
  return id;
}

const changePassword = async (user, newPassword) => {
  const id = user._id;
  const model = await User.findById(id);
  if (model) {
    model.passwordHash = await User.getHashedPassword(newPassword);
    model.passwordResetToken = null;
    model.updatedAt = Date.now().toString();
    model.save();
    return model._id;
  }
  throw new NotFound(`User not found by the id: ${id}`);
}
