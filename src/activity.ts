import { Activity, ActivityTypes } from 'botbuilder'
import { BasicInboundMediaMessage } from './api'
import { OpenAPI } from './api/generated/core/OpenAPI'
import { BasicInboundMessage } from './api/generated/models/BasicInboundMessage'
import { InboundMessage } from './api/generated/models/InboundMessage'
import { WhatsAppInboundMessage } from './api/generated/models/WhatsAppInboundMessage'
import { MessageNotSupported, ValidationError } from './errors'

const DEFAULT_ACTIVITY_PROPERTIES = {
  conversation: {
    isGroup: false,
    conversationType: 'text',
  },
  callerId: 'unknown',
  label: 'unknown',
  listenFor: [],
  localTimezone: 'America/Los_Angeles',
  valueType: 'text',
}

export function inboundMessageToActivity(message: unknown): Activity {
  if (!isInboundMessage(message)) {
    throw new ValidationError('Given event is not message')
  }

  const sender = getConversation(message)
  const channelId = getChannelId(message)

  const activityBase = {
    ...DEFAULT_ACTIVITY_PROPERTIES,
    recipient: {
      id: message.to,
      name: message.to,
    },
    type: ActivityTypes.Message,
    conversation: sender.conversation,
    from: sender.conversation,
    replyToId: getReplyToId(message),
    timestamp: new Date(message.timestamp),
    channelId,
    serviceUrl: getServiceUrl(channelId, sender.conversation.id),
  }

  if (isBasicInboundMediaMessage(message)) {
    if (message.media.url) {
      return {
        ...activityBase,
        attachments: [
          {
            contentUrl: message.media.url,
            contentType: getMimeType(message),
          },
        ],
        text: message.message.body ?? '',
      }
    }
  }

  if (isBasicInboundMessage(message)) {
    if (message.message.body) {
      return {
        ...activityBase,
        text: message.message.body!,
      }
    }
  }

  throw new MessageNotSupported(
    `TyntecWhatsAppAdapter: ITyntecMoMessage.content.media.type other than audio, document, image, sticker and video not supported`,
  )
}

function isInboundMessage(message: unknown): message is InboundMessage {
  return (
    (message as InboundMessage).type === 'message' &&
    (message as InboundMessage).to !== undefined
  )
}

function isBasicInboundMessage(
  message: InboundMessage,
): message is BasicInboundMessage {
  return (
    (message as BasicInboundMessage).message !== undefined &&
    (message as BasicInboundMessage).type === 'message' &&
    (message as BasicInboundMessage).message.type === 'text'
  )
}

function isBasicInboundMediaMessage(
  message: InboundMessage,
): message is BasicInboundMediaMessage {
  return (
    (message as BasicInboundMediaMessage).type === 'message' &&
    (message as BasicInboundMediaMessage).media !== undefined
  )
}

function getConversation({
  from,
}: InboundMessage): Pick<Activity, 'conversation'> {
  const { jid, name } = from
  if (!jid) {
    throw new ValidationError('from.jid is undefined')
  }

  if (!name) {
    throw new ValidationError('from.name is undefined')
  }

  return {
    conversation: {
      ...DEFAULT_ACTIVITY_PROPERTIES.conversation,
      id: jid,
      name: name,
    },
  }
}

const getChannelId = (message: InboundMessage) => message.to

function getReplyToId(message: InboundMessage): string | undefined {
  return (message as WhatsAppInboundMessage).contextInfo?.quotedMessage?.id
}

const getServiceUrl = (channelJid: string, contactJid: string) =>
  `${OpenAPI.BASE}/channels/${channelJid}/messages/${contactJid}`

function getMimeType(message: BasicInboundMediaMessage): string {
  if (!message.message.mimeType) {
    throw new ValidationError('mimeType is undefined')
  }

  return message.message.mimeType
}
