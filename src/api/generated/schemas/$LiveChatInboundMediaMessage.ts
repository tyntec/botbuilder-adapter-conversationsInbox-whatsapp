/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LiveChatInboundMediaMessage = {
  type: 'all-of',
  contains: [{
    type: 'BasicInboundMediaMessage',
  }, {
    properties: {
      message: {
        type: 'one-of',
        contains: [{
          type: 'DocumentMessage',
        }, {
          type: 'ImageMessage',
        }],
      },
    },
  }],
} as const;
