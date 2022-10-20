/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendDocumentMessageBodyType = {
  properties: {
    title: {
      type: 'string',
      isRequired: true,
    },
    fileName: {
      type: 'string',
      isRequired: true,
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
