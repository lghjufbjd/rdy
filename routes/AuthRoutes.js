const { login } = require("../controllers/authControllers");
const { saveForm } = require("../controllers/formController");
const { updateTheme } = require("../controllers/themeController");
const { getTheme } = require("../controllers/themeController");
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/admin", checkUser); 
router.post("/login", login);
router.post("/form", saveForm);
router.post("/updateTheme", updateTheme);
router.post("/getTheme", getTheme);


module.exports = router;