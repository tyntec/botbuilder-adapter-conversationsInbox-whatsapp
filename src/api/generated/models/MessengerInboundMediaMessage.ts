/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AudioMessage } from './AudioMessage';
import type { BasicInboundMediaMessage } from './BasicInboundMediaMessage';
import type { DocumentMessage } from './DocumentMessage';
import type { GifMessage } from './GifMessage';
import type { ImageMessage } from './ImageMessage';
import type { VideoMessage } from './VideoMessage';
import type { VoiceMessage } from './VoiceMessage';

export type MessengerInboundMediaMessage = (BasicInboundMediaMessage & {
  message?: (AudioMessage | DocumentMessage | GifMessage | ImageMessage | VoiceMessage | VideoMessage);
});

