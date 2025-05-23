const User = require("../models/User");
const Ban = require("../models/Ban");
const { createPaginationData } = require("../utils");

exports.banUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findOne({
      _id: userId,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found!!",
      });
    }

    if (user.roles.includes("ADMIN")) {
      return res.status(400).json({
        message: "You cannot banned an admin",
      });
    }

    const removedUSer = await User.findOneAndDelete({ _id: userId });

    await Ban.create({
      phone: user.phone,
    });

    return res.status(200).json({
      message: "User banned successfully",
      user: removedUSer,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  let { page = 1, limit = 10 } = req.query;

  const users = await User.find({})
    .skip((page - 1) * limit)
    .limit(limit);

  const totalUsers = await User.countDocuments();

  return res.status(200).json({
    users,
    pagination: createPaginationData(page, limit, totalUsers, "Users"),
  });
};

exports.unBan = async (req, res, next) => {
  try {
    const { phone } = req.params;

    const unBanUser = await Ban.findOneAndDelete({ phone });

    if (!unBanUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User unBanned successfully",
    });
  } catch (error) {
    next(error);
  }
};
exports.remove = async (req, res, next) => {
  try {
    const { userId } = req.params;

    if (!userId == req.user._id) {
      return res.status(400).json({
        message: "You cant remove this user!",
      });
    }

    const removedUser = await User.findOneAndDelete({
      _id: userId,
    });

    if (!removedUser) {
      return res.status(404).json({
        message: "User not found!!",
      });
    }

    return res.status(200).json({
      message: "User removed successfully",
      user: removedUser,
    });
  } catch (error) {
    next(error);
  }
};
