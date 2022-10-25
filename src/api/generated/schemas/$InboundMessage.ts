/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InboundMessage = {
  type: 'one-of',
  contains: [{
    type: 'BasicInboundMessage',
  }, {
    type: 'WhatsAppInboundMediaMessage',
  }, {
    type: 'WhatsAppInboundMessage',
  }, {
    type: 'TwitterInboundMediaMessage',
  }, {
    type: 'TwitterInboundMessage',
  }, {
    type: 'MessengerInboundMediaMessage',
  }, {
    type: 'MessengerInboundMessage',
  }, {
    type: 'ViberInboundMediaMessage',
  }, {
    type: 'ViberInboundMessage',
  }, {
    type: 'LiveChatInboundMediaMessage',
  }, {
    type: 'LiveChatInboundMessage',
  }, {
    type: 'SMSInboundMessage',
  }],
} as const;
