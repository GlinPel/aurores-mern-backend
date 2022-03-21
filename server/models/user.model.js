const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "El nombre es requerido"],
		minlength: [3, "El nombre debe ser mayor a 3 carácteres"]
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;