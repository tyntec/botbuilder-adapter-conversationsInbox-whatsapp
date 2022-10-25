/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicInboundMediaMessage } from './BasicInboundMediaMessage';
import type { GifMessage } from './GifMessage';
import type { ImageMessage } from './ImageMessage';
import type { VideoMessage } from './VideoMessage';

export type TwitterInboundMediaMessage = (BasicInboundMediaMessage & {
  message?: (GifMessage | ImageMessage | VideoMessage);
});

