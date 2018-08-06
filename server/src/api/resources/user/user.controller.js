import Joi from "joi"
import User from "./user.model"

export default {
    async create (req, res){
        try{
            const schema = Joi.object().keys({
                name: Joi.string().required(),
                address: Joi.string().required(),
                email: Joi.string().required(),
                phoneNumber: Joi.string().required(),
            });
            const { value, error } = Joi.validate(req.body, schema);
            if (error && error.details) {
                return res.status(400).json(error);
            }
        
            const user = await User.create(value);
            return res.json(user);
        }catch(err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    
    async findAll(req, res){
        try{
            const users = await User.find({});
            res.json(users)
        } catch (e) {
            console.error(e)
            return res.status(500).send(e)
        }
    },

    async findOne(req, res){
        try{
            const { id } = req.params;
            const user = await User.findById(id)
            if(!user){
            return res.status(404).json({err : 'could not find user'})
            }
            return res.json(user)
        } catch (err) {
            console.error(err)
            return res.status(500).send(err)
        } 
    },
    
    async update (req, res){
        try{
            const { id } = req.params;
            const schema = Joi.object().keys({
                title: Joi.string().required(),
                text: Joi.string().required(),
                price: Joi.number()
                .precision(2)
                .min(0)
                .required(),
            });
            const { value, error } = Joi.validate(req.body, schema);
            if (error && error.details) {
                return res.status(400).json(error);
            }
            const user = await User.findOneAndUpdate({_id:id}, value, {new:true})
            if(!user){
                return res.status(404).json({err:'could not find user'})
            }
            return res.json(user);
        } catch (err) {
        console.error(err);
        return res.status(500).send(err);
        }
    },
    async delete(req, res){
        try{
            const { id } = req.params;
            const user = await User.findOneAndRemove({_id:id})
            if(!user){
                return res.status(404).json({err:'could not found user'})
            }
            res.json(user);
        } catch (e) {
            console.error(e)
            return res.status(500).send(e)
        }
    }
}
