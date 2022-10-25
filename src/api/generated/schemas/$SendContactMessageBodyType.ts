/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendContactMessageBodyType = {
  properties: {
    type: {
      type: 'Enum',
      isRequired: true,
    },
    contacts: {
      type: 'array',
      contains: {
        properties: {
        },
      },
      isRequired: true,
    },
  },
} as const;
