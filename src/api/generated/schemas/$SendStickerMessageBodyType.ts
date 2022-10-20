/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendStickerMessageBodyType = {
  properties: {
    type: {
      type: 'Enum',
      isRequired: true,
    },
    mimeType: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;
