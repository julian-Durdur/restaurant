import Joi from "joi"
import Meal from "./meal.model"

export default {
    async create (req, res){
        try{
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
        
            const meal = await Meal.create(value);
            return res.json(meal);
        }catch(err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    
    async findAll(req, res){
        try{
            const { page, perPage } = req.query;
            const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(perPage, 10) || 10,
            };
            const meals = await Meal.find({});
            res.json(meals)
        } catch (e) {
            console.error(e)
            return res.status(500).send(e)
        }
    },

    async findOne(req, res){
        try{
            const { id } = req.params;
            const meal = await Meal.findById(id)
            if(!meal){
            return res.status(404).json({err : 'could not find meal'})
            }
            return res.json(meal)
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
            const meal = await Meal.findOneAndUpdate({_id:id}, value, {new:true})
            if(!meal){
                return res.status(404).json({err:'could not find meal'})
            }
            return res.json(meal);
        } catch (err) {
        console.error(err);
        return res.status(500).send(err);
        }
    },
    async delete(req, res){
        try{
            const { id } = req.params;
            const meal = await Meal.findOneAndRemove({_id:id})
            if(!meal){
                return res.status(404).json({err:'could not found meal'})
            }
            res.json(meal);
        } catch (e) {
            console.error(e)
            return res.status(500).send(e)
        }
    }
}
