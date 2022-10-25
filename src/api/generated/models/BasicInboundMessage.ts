/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { From } from './From';
import type { TextMessage } from './TextMessage';

export type BasicInboundMessage = {
  from: From;
  message: TextMessage;
  timestamp: number;
  to: string;
  type: 'message';
  version: number;
};

