/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SMSInboundMessage = {
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
