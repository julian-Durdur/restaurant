import mongoose from "mongoose"
//import mongoosePaginate from 'mongoose-paginate'

const { Schema } = mongoose
const userSchema = new Schema({
	username: {
		type: String,
		required: [true, "user must have a username"],
	},
	password: {
		type:String,
		required:[true, "user must have a password"],
	},
	name:{
		type:String,
		required:[true, "user must have name"],
	},
	address:{
		type:String,
		required:[true, "user must have address"],
  },
  email:{
		type:String,
		required:[true, "user must have email"],
	},
	phonenumber:{
		type:String,
    required:[true, "user must have a phone number"],
	},
	notes : {
		type : String
	}
})

//userSchema.plugin(mongoosePaginate)

export default mongoose.model('User', userSchema)
