/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BasicInboundMessage = {
  properties: {
    from: {
      type: 'From',
      isRequired: true,
    },
    message: {
      type: 'TextMessage',
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
