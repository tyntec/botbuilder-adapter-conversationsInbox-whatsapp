/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WhatsAppMessageDeleted = {
  properties: {
    from: {
      type: 'From',
      isRequired: true,
    },
    message: {
      properties: {
        id: {
          type: 'string',
        },
      },
      isRequired: true,
    },
    timestamp: {
      type: 'number',
      isRequired: true,
    },
    to: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'Enum',
      isRequired: true,
    },
    version: {
      type: 'number',
      isRequired: true,
    },
  },
} as const;
