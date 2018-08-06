import mongoose from "mongoose"
//import mongoosePaginate from 'mongoose-paginate'

const { Schema } = mongoose
const orderSchema = new Schema({
	user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    cart :
    [
        {
            qty : { type : Number},
            meal : { type: mongoose.Schema.Types.ObjectId, ref: 'Meal'}
        }
    ],
	note:{
		type:Number,
		default:0,
		min:0,
	}
})

//orderSchema.plugin(mongoosePaginate)

export default mongoose.model('Order', orderSchema)
