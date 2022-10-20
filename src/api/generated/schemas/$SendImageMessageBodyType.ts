/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendImageMessageBodyType = {
  properties: {
    caption: {
      type: 'string',
    },
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
