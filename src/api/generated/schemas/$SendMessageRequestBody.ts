/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendMessageRequestBody = {
  properties: {
    message: {
      type: 'one-of',
      contains: [{
        type: 'SendTextMessageBodyType',
      }, {
        type: 'SendVideoMessageBodyType',
      }, {
        type: 'SendTemplateMessageBodyType',
      }, {
        type: 'SendStickerMessageBodyType',
      }, {
        type: 'SendVoiceMessageBodyType',
      }, {
        type: 'SendLocationMessageBodyType',
      }, {
        type: 'SendImageMessageBodyType',
      }, {
        type: 'SendGifMessageBodyType',
      }, {
        type: 'SendDocumentMessageBodyType',
      }, {
        type: 'SendContactMessageBodyType',
      }, {
        type: 'SendAudioMessageBodyType',
      }],
      isRequired: true,
    },
  },
} as const;
