const Form = require("../model/formModel");
let client = require("@sendgrid/mail");
const handleErrors = (err) => {
  console.log("err");

  let errors = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    noGuests: "",
  };

  console.log(err);
  if (err.message === "b") {
    errors.firstName = "a";
  }

  if (err.message === "a") {
    errors.lastName = "b";
  }

  if (err.message.includes("Forms validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.saveForm = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, date, noGuests } =
      req.body;
    const form = await Form.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      date,
      noGuests,
    });
    client.setApiKey("");
    client
      .send({
        to: {
          email: email,
          firstName: firstName,
        },
        from: {
          email: "steak.restaurant.bot@gmail.com",
          name: "Steak Restaurant",
        },
        templateId: "d-8a6130d42fb3408ba494a2cf6ff782da",
        dynamicTemplateData: {
          firstName: firstName,
        },
      })
      .then(() => {
        console.log(`Email sent to: ${firstName}`);
      });
    res.status(201).json({ form: form, isBooked: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, isBooked: false });
  }
};
