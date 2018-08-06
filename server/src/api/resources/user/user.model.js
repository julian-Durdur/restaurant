import mongoose from "mongoose"
//import mongoosePaginate from 'mongoose-paginate'

const { Schema } = mongoose
const userSchema = new Schema({
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
    
	phoneNumber:{
		type:String,
        required:[true, "user must have phoneNumber"],
	}
})

//userSchema.plugin(mongoosePaginate)

export default mongoose.model('User', userSchema)
