/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { From } from './From';

export type WhatsAppMessageDeleted = {
  from: From;
  message: {
    id?: string;
  };
  timestamp: number;
  to: string;
  type: 'revoke';
  version: number;
};

