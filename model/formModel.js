const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  noGuests: {
    type: Number,
    required: [true, "No. Guests is required"],
  },
});

formSchema.pre("save", async function (next) {
  console.log("save")

  next();
});



module.exports = mongoose.model("Forms", formSchema);
