const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidateController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.get("/", candidateController.getAll);
router.get("/:id", candidateController.getOne);
router.post("/", candidateController.create);
router.put("/:id", candidateController.update);
router.delete("/:id", candidateController.remove);

module.exports = router;
