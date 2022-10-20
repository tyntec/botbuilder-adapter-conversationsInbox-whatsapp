/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessengerInboundMessage = {
  type: 'all-of',
  contains: [{
    type: 'BasicInboundMessage',
  }, {
    properties: {
      message: {
        type: 'one-of',
        contains: [{
          type: 'TextMessage',
        }],
      },
    },
  }],
} as const;
