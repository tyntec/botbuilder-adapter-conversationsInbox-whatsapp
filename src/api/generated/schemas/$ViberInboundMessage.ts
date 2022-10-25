/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ViberInboundMessage = {
  type: 'all-of',
  contains: [{
    type: 'BasicInboundMessage',
  }, {
    properties: {
      message: {
        type: 'one-of',
        contains: [{
          type: 'TextMessage',
        }, {
          type: 'LocationMessage',
        }],
      },
    },
  }],
} as const;
