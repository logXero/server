const User = require("./model");
const bcryptjs = require("bcryptjs");
const { getById } = require("../../core/repository");

const checkUserExists = async (req, res) => {
	try {
		if (req.body) {
			const user = await getById(req.body,model);
			if (!user) {
				return res
					.status(422)
					.send({ status: "Error", message: "User does not exist" });
			}
		}
		return res
			.status(200)
			.send({ status: "Error", message: "User does not exist" });
	} catch (error) {}
};
