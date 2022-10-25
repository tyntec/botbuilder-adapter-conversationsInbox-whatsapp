/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicInboundMessage } from './BasicInboundMessage';
import type { Media } from './Media';

export type BasicInboundMediaMessage = (BasicInboundMessage & {
  media: Media;
  /**
   * refined per channel
   */
  message?: any;
});

