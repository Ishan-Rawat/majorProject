/**
 * Whenever users sign up or forget's their password we will create temporary tokens in our database that will be used for email verifaction, password reset, etc. 
 * Note that these tokens and not the same as the JWT tokens we will be using later on for authentication purposes. 
 */
import mongoose from "mongoose";

const { Schema } = mongoose;

const verifyResetTokenSchema = new Schema({
	_userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	token: { type: String, required: true },
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
		expires: 900,
	},
});

const VerifyResetToken = mongoose.model(
	"VerifyResetToken",
	verifyResetTokenSchema
);

export default VerifyResetToken;