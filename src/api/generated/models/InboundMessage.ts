/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicInboundMessage } from './BasicInboundMessage';
import type { LiveChatInboundMediaMessage } from './LiveChatInboundMediaMessage';
import type { LiveChatInboundMessage } from './LiveChatInboundMessage';
import type { MessengerInboundMediaMessage } from './MessengerInboundMediaMessage';
import type { MessengerInboundMessage } from './MessengerInboundMessage';
import type { SMSInboundMessage } from './SMSInboundMessage';
import type { TwitterInboundMediaMessage } from './TwitterInboundMediaMessage';
import type { TwitterInboundMessage } from './TwitterInboundMessage';
import type { ViberInboundMediaMessage } from './ViberInboundMediaMessage';
import type { ViberInboundMessage } from './ViberInboundMessage';
import type { WhatsAppInboundMediaMessage } from './WhatsAppInboundMediaMessage';
import type { WhatsAppInboundMessage } from './WhatsAppInboundMessage';

export type InboundMessage = (BasicInboundMessage | WhatsAppInboundMediaMessage | WhatsAppInboundMessage | TwitterInboundMediaMessage | TwitterInboundMessage | MessengerInboundMediaMessage | MessengerInboundMessage | ViberInboundMediaMessage | ViberInboundMessage | LiveChatInboundMediaMessage | LiveChatInboundMessage | SMSInboundMessage);

