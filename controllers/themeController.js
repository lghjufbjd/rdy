const Theme = require("../model/themeModel");
const handleErrors = (err) => {
  let errors = { color: "", font: "", padding: "", size: "" };

  console.log(err);
  if (err.message === "incorrect color") {
    errors.login = "incorrect color";
  }

  if (err.message === "incorrect font") {
    errors.password = "incorrect font";
  }
  if (err.message === "incorrect padding") {
    errors.password = "incorrect padding";
  }
  if (err.message === "incorrect size") {
    errors.password = "incorrect size";
  }

  return errors;
};


module.exports.updateTheme = async (req, res) => {
  const { color, font, padding, size } = req.body;
  try {
    const ThemeColor = await Theme.updateOne({
      $set: { color: color },
    });
    const ThemeFont = await Theme.updateOne({
      $set: { font: font },
    });
    const ThemePadding = await Theme.updateOne({
      $set: { padding: padding },
    });
    const ThemeSize = await Theme.updateOne({
      $set: { size: size },
    });
    res
      .status(200)
      .json({
        theme: [ThemeColor, ThemeFont, ThemePadding, ThemeSize],
        status: true,
      });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }
};

module.exports.getTheme = async (req, res) => {
  try {
    const theme =  Theme.findById( { __v: 0});
    res
      .status(200)
      .json({
        theme:theme,
        status: true,
      });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors:errors, status: false });
  }
};
