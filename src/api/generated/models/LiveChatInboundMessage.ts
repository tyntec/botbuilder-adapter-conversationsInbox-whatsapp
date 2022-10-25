/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicInboundMessage } from './BasicInboundMessage';
import type { TextMessage } from './TextMessage';

export type LiveChatInboundMessage = (BasicInboundMessage & {
  message?: TextMessage;
});

