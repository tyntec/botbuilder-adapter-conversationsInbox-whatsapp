/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicInboundMessage } from './BasicInboundMessage';
import type { ContactMessage } from './ContactMessage';
import type { LocationMessage } from './LocationMessage';
import type { TextMessage } from './TextMessage';
import type { WhatsAppContextInfo } from './WhatsAppContextInfo';

export type WhatsAppInboundMessage = (BasicInboundMessage & {
  contextInfo?: WhatsAppContextInfo;
  message?: (TextMessage | ContactMessage | LocationMessage);
});

