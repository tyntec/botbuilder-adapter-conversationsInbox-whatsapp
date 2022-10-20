/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SendTemplateMessageBodyType = {
  properties: {
    type: {
      type: 'Enum',
      isRequired: true,
    },
    template: {
      type: 'array',
      contains: {
        properties: {
        },
      },
      isRequired: true,
    },
  },
} as const;
