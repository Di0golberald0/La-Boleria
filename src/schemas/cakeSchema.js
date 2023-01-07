import joi from 'joi';

const cakeSchema = joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().required(),
  image: joi.string().uri().required(),
  description: joi.string().required()
});

export default cakeSchema;