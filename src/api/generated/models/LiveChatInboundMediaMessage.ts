/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicInboundMediaMessage } from './BasicInboundMediaMessage';
import type { DocumentMessage } from './DocumentMessage';
import type { ImageMessage } from './ImageMessage';

export type LiveChatInboundMediaMessage = (BasicInboundMediaMessage & {
  message?: (DocumentMessage | ImageMessage);
});

