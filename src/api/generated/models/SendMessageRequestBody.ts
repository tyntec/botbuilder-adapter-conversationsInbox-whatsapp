/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendAudioMessageBodyType } from './SendAudioMessageBodyType';
import type { SendContactMessageBodyType } from './SendContactMessageBodyType';
import type { SendDocumentMessageBodyType } from './SendDocumentMessageBodyType';
import type { SendGifMessageBodyType } from './SendGifMessageBodyType';
import type { SendImageMessageBodyType } from './SendImageMessageBodyType';
import type { SendLocationMessageBodyType } from './SendLocationMessageBodyType';
import type { SendStickerMessageBodyType } from './SendStickerMessageBodyType';
import type { SendTemplateMessageBodyType } from './SendTemplateMessageBodyType';
import type { SendTextMessageBodyType } from './SendTextMessageBodyType';
import type { SendVideoMessageBodyType } from './SendVideoMessageBodyType';
import type { SendVoiceMessageBodyType } from './SendVoiceMessageBodyType';

export type SendMessageRequestBody = {
  message: (SendTextMessageBodyType | SendVideoMessageBodyType | SendTemplateMessageBodyType | SendStickerMessageBodyType | SendVoiceMessageBodyType | SendLocationMessageBodyType | SendImageMessageBodyType | SendGifMessageBodyType | SendDocumentMessageBodyType | SendContactMessageBodyType | SendAudioMessageBodyType);
};

