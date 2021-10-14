const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    nombres: {
      type: String,
    },
    apellidos: {
      type: String,
    },
    identificacion: {
      type: Number,
    },
    correo: {
      type: String,
    },
    ciudad: {
      type: String,
    },
    contraseña: {
      type: String,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);
