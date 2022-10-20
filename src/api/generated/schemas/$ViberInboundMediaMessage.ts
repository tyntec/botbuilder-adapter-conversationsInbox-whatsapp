/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ViberInboundMediaMessage = {
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
        }, {
          type: 'VideoMessage',
        }],
      },
    },
  }],
} as const;
