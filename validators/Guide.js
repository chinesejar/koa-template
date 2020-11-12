const Ajv = require('ajv');

const schema = {
  type: 'object',
  required: ['title', 'type', 'routes'],
  properties: {
    title: {
      type: 'string',
    },
    type: {
      type: 'number',
      minimum: 0,
    },
    content: {
      type: 'string',
    },
    routes: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['pois'],
        properties: {
          content: {
            type: 'string',
          },
          pois: {
            type: 'array',
            minItems: 1,
            items: {
              type: 'object',
              required: ['poi'],
              properties: {
                poi: {
                  type: 'string',
                },
                content: {
                  type: 'string',
                },
                images: {
                  type: 'array',
                  uniqueItems: true,
                  items: {
                    type: 'string',
                  }
                },
              }
            }
          }
        }
      }
    }
  }
}

module.exports = new Ajv({allErrors: true}).compile(schema);
