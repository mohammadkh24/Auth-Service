const express = require("express");
const controller = require("../controllers/users");
const { auth } = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

router
  .route("/")
  .get(auth, isAdmin, controller.getAll)
router
  .route("/:userId")
  .delete(auth, isAdmin, controller.remove)

router.route("/ban/:userId").post(auth, isAdmin, controller.banUser);
router.route("/unBan/:phone").delete(auth, isAdmin, controller.unBan);

module.exports = router;
