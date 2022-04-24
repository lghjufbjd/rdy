// const theme = {
//     color: {
//       primary: "#F6AD49",
//       secondary: "#433D3C",
//       background: "#FFFBF9",
//       textWhite: "#FCFCFC",
//       textBlack: "#202020",
//       textBlackDisabled: "#CDCDCD",
//     },
//     font: {
//       default: "0.813rem",
//       header: "1rem",
//       medium: "1.188rem",
//       big: "1.188rem",
//       huge: "5.5rem",
//     },
  
//     padding: {
//       tb: "44px",
//       rl: "55px",
//       mtb: "5vw",
//       mrl: "6vw",
//     },
  
//     size: {
//       sectionHeight: "100vh",
//     },
//   };
const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
    color: {
    type: Object,
    required: [true, "Color is required"],
  },
  font: {
    type: Object,
    required: [true, "Font is required"],
  },
  padding: {
    type: Object,
    required: [true, "Padding is required"],
  },
  size: {
    type: Object,
    required: [true, "Size is required"],
  },
});

themeSchema.pre("save", async function (next) {
  console.log("save")

  next();
});



module.exports = mongoose.model("Theme", themeSchema);
