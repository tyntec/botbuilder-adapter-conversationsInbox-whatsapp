/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BasicInboundMediaMessage = {
  type: 'all-of',
  contains: [{
    type: 'BasicInboundMessage',
  }, {
    properties: {
      media: {
        type: 'Media',
        isRequired: true,
      },
      message: {
        description: `refined per channel`,
        properties: {
        },
      },
    },
  }],
} as const;
