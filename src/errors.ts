export enum ValidationErrorNames {
  InvalidIncomingMessage,
}

export class ValidationError extends Error {}

export class MessageNotSupported extends Error {}
