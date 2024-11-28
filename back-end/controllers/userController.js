import { userModel } from "../model/user.model.js";

const createUser = (req, res) => {
  const result = userModel.create({
    name: "Saruul",
    email: "saruul.11@gmail.com",
    password: "12345",
    phoneNumber: 99991111,
  });
  res.json({
    success: true,
    data: result,
  });
};

const getAllUsers = async (req, res) => {
  const result = await userModel.find();
  res.json({
    success: true,
    data: result,
  });
};

export { createUser, getAllUsers };
