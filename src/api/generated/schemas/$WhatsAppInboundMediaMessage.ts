/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WhatsAppInboundMediaMessage = {
  type: 'all-of',
  contains: [{
    type: 'BasicInboundMediaMessage',
  }, {
    properties: {
      contextInfo: {
        type: 'WhatsAppContextInfo',
      },
      message: {
        type: 'one-of',
        contains: [{
          type: 'AudioMessage',
        }, {
          type: 'DocumentMessage',
        }, {
          type: 'ImageMessage',
        }, {
          type: 'VoiceMessage',
        }, {
          type: 'StickerMessage',
        }, {
          type: 'VideoMessage',
        }],
      },
    },
  }],
} as const;
