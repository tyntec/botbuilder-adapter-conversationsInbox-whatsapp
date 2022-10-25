/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendAudioMessageBodyType = {
  properties: {
    mimeType: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'Enum',
      isRequired: true,
    },
  },
} as const;
