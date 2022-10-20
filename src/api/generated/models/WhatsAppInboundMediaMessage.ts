/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AudioMessage } from './AudioMessage';
import type { BasicInboundMediaMessage } from './BasicInboundMediaMessage';
import type { DocumentMessage } from './DocumentMessage';
import type { ImageMessage } from './ImageMessage';
import type { StickerMessage } from './StickerMessage';
import type { VideoMessage } from './VideoMessage';
import type { VoiceMessage } from './VoiceMessage';
import type { WhatsAppContextInfo } from './WhatsAppContextInfo';

export type WhatsAppInboundMediaMessage = (BasicInboundMediaMessage & {
  contextInfo?: WhatsAppContextInfo;
  message?: (AudioMessage | DocumentMessage | ImageMessage | VoiceMessage | StickerMessage | VideoMessage);
});

