/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicInboundMessage } from './BasicInboundMessage';
import type { LocationMessage } from './LocationMessage';
import type { TextMessage } from './TextMessage';

export type ViberInboundMessage = (BasicInboundMessage & {
  message?: (TextMessage | LocationMessage);
});

