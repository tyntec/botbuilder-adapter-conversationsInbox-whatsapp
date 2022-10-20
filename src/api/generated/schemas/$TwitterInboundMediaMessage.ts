/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TwitterInboundMediaMessage = {
  type: 'all-of',
  contains: [{
    type: 'BasicInboundMediaMessage',
  }, {
    properties: {
      message: {
        type: 'one-of',
        contains: [{
          type: 'GifMessage',
        }, {
          type: 'ImageMessage',
        }, {
          type: 'VideoMessage',
        }],
      },
    },
  }],
} as const;
