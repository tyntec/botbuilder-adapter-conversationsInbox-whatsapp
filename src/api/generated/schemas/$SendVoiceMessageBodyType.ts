/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendVoiceMessageBodyType = {
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
