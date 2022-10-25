/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicInboundMediaMessage } from './BasicInboundMediaMessage';
import type { DocumentMessage } from './DocumentMessage';
import type { ImageMessage } from './ImageMessage';
import type { VideoMessage } from './VideoMessage';

export type ViberInboundMediaMessage = (BasicInboundMediaMessage & {
  message?: (DocumentMessage | ImageMessage | VideoMessage);
});

