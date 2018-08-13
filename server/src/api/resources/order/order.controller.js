import Joi from "joi"
import Order from "./order.model"

export default {
    async create (req, res){
        try{
           // const schema = Joi.object().keys({
           //     user: Joi.string().required(),
           //     cart: Joi.string().required(),
           //     deliveryDate: Joi.string().required(),
           // });
           // const { value, error } = Joi.validate(req.body, schema);
           // if (error && error.details) {
           //     return res.status(400).json(error);
           // }
        
            const order = await Order.create(req.body);
            return res.json(order);
        } catch(err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    
    async findAll(req, res){
        try {
            const orders = await Order.find({});
            res.json(orders)
        } catch (e) {
            console.error(e)
            return res.status(500).send(e)
        }
    },

    async findOne(req, res){
        try {
            const { id } = req.params;
            const order = await Order.findById(id)
            if (!order){
            return res.status(404).json({err : 'could not find order'})
            }
            return res.json(order)
        } catch (err) {
            console.error(err)
            return res.status(500).send(err)
        } 
    },
    
    async update (req, res){
        try{
            const { id } = req.params;
						
           // const schema = Joi.object().keys({
					 // 		name: Joi.string().required(),
           //     address: Joi.string().required(),
           //     email: Joi.string().required(),
           //     phoneNumber: Joi.string().required(),
           // });
           // const { value, error } = Joi.validate(req.body, schema);
           // if (error && error.details) {
           //     return res.status(400).json(error);
           // }
           const order = await Order.findOneAndUpdate({_id:id}, req.body, {new:true})
            if(!order){
                return res.status(404).json({err:'could not find order'})
            }
            return res.json(order);
        } catch (err) {
        console.error(err);
        return res.status(500).send(err);
        }
    },
    async delete(req, res){
        try{
            const { id } = req.params;
            const order = await Order.findOneAndRemove({_id:id})
            if(!order){
                return res.status(404).json({err:'could not found order'})
            }
            res.json(order);
        } catch (e) {
            console.error(e)
            return res.status(500).send(e)
        }
    }
}
