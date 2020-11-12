const Ajv = require('ajv');

const schema = {
  type: 'object',
  required: ['phone', 'password'],
  properties: {
    phone: {
      type: 'string',
      minLength: 11,
      maxLength: 11,
    },
    password: {
      type: 'string',
      minLength: 32,
      maxLength: 32,
    }
  }
}

module.exports = new Ajv({allErrors: true}).compile(schema);
