import Joi from "joi"
import User from "./user.model"

export default {
    async create (req, res){
        try{
            const schema = Joi.object().keys({
                username: Joi.string().required(),
                password: Joi.string().required(),
                name: Joi.string().required(),
                address: Joi.string().required(),
                email: Joi.string().required(),
                phonenumber: Joi.string().required(),
                notes: Joi.string().optional(),
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
								username: Joi.string().required(),
                password: Joi.string().required(),
                name: Joi.string().required(),
                address: Joi.string().required(),
                email: Joi.string().required(),
                phonenumber: Joi.string().required(),
                notes: Joi.string().optional(),
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
