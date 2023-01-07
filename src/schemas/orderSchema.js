import joi from 'joi';

const orderSchema = joi.object({
  quantity: joi.number().integer().min(1).max(4).required(),
  totalPrice: joi.string().required()
});

export default orderSchema;