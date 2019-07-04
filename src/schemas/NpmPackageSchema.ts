export const NpmPackageSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    version: {
      type: 'string'
    },
    dependencies: {
      type: 'object',
      additionalProperties: {
        type: 'string'
      }
    },
    devDependencies: {
      type: 'object',
      additionalProperties: {
        type: 'string'
      }
    },
    links: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    scripts: {
      type: 'object',
      additionalProperties: {
        type: 'string'
      }
    }
  }
};
