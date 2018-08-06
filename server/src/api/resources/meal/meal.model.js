import mongoose from "mongoose"
//import mongoosePaginate from 'mongoose-paginate'

const { Schema } = mongoose
const mealSchema = new Schema({
	title:{
		type:String,
		required:[true, "meal must have title"],
	},
	text:{
		type:String,
		required:[true, "meal must have text"],
	},
	price:{
		type:Number,
		default:0,
		min:0,
	}
})

//mealSchema.plugin(mongoosePaginate)

export default mongoose.model('Meal', mealSchema)
