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
            console.log('salut Julian');
            
            const meal = await Meal.create(value);
            return res.json(meal);
        }catch(err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
}