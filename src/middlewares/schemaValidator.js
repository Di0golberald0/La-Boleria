export function validateSchema(schema, err) {
  return (req, res, next) => { 
    const {error} = schema.validate(req.body, {abortEarly: false});
    if (error) {
      return res.status(err).send(error.details.map(detail => detail.message));
    }
    
    next();
  }
}
