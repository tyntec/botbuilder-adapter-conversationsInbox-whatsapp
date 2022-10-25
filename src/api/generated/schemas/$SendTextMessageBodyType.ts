/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendTextMessageBodyType = {
  properties: {
    type: {
      type: 'Enum',
      isRequired: true,
    },
    body: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;
