/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessengerInboundMediaMessage = {
  type: 'all-of',
  contains: [{
    type: 'BasicInboundMediaMessage',
  }, {
    properties: {
      message: {
        type: 'one-of',
        contains: [{
          type: 'AudioMessage',
        }, {
          type: 'DocumentMessage',
        }, {
          type: 'GifMessage',
        }, {
          type: 'ImageMessage',
        }, {
          type: 'VoiceMessage',
        }, {
          type: 'VideoMessage',
        }],
      },
    },
  }],
} as const;
