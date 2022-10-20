/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendLocationMessageBodyType = {
  properties: {
    type: {
      type: 'Enum',
      isRequired: true,
    },
    latitude: {
      type: 'number',
      isRequired: true,
      format: 'float',
    },
    longitude: {
      type: 'number',
      isRequired: true,
      format: 'float',
    },
    name: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
  },
} as const;
