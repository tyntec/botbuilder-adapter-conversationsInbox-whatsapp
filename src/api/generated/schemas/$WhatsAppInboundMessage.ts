/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WhatsAppInboundMessage = {
  type: 'all-of',
  contains: [{
    type: 'BasicInboundMessage',
  }, {
    properties: {
      contextInfo: {
        type: 'WhatsAppContextInfo',
      },
      message: {
        type: 'one-of',
        contains: [{
          type: 'TextMessage',
        }, {
          type: 'ContactMessage',
        }, {
          type: 'LocationMessage',
        }],
      },
    },
  }],
} as const;
