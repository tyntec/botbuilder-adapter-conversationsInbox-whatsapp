import { ActivityTypes } from 'botbuilder'
import { inboundMessageToActivity } from './activity'

describe('inboundMessageToActivity', () => {
  const inboundMessage = {
    version: '1',
    message: {
      type: 'text',
      id: '1234567',
      body: 'Ahoj kamo!',
    },
    timestamp: 1665066449,
    to: '123456789@whatsapp.eazy.im',
    type: 'message',
    from: {
      jid: '12445',
      name: 'Boss',
    },
  }

  it('throw ValidationError if invalid message', () => {
    expect(() => {
      inboundMessageToActivity({ random: 'object' })
    }).toThrowError('Given event is not message')
  })

  it('returns Activity when valid InboundMessage', () => {
    expect(inboundMessageToActivity(inboundMessage)).toMatchObject({
      recipient: {
        id: inboundMessage.to,
        name: inboundMessage.to,
      },
      type: ActivityTypes.Message,
      conversation: {
        id: inboundMessage.from.jid,
        name: inboundMessage.from.name,
      },
      from: {
        id: inboundMessage.from.jid,
        name: inboundMessage.from.name,
      },
      timestamp: new Date(inboundMessage.timestamp),
      channelId: inboundMessage.to,
    })
  })

  it('returns Activity when valid media InboundMessage', () => {
    const inboundMediaMessage = {
      ...inboundMessage,
      message: {
        ...inboundMessage.message,
        mimeType: 'application/json',
      },
      media: {
        url: 'some.url',
      },
    }

    expect(inboundMessageToActivity(inboundMediaMessage)).toMatchObject({
      recipient: {
        id: inboundMessage.to,
        name: inboundMessage.to,
      },
      type: ActivityTypes.Message,
      conversation: {
        id: inboundMessage.from.jid,
        name: inboundMessage.from.name,
      },
      from: {
        id: inboundMessage.from.jid,
        name: inboundMessage.from.name,
      },
      timestamp: new Date(inboundMessage.timestamp),
      channelId: inboundMessage.to,
      attachments: [
        {
          contentUrl: inboundMediaMessage.media.url,
          contentType: inboundMediaMessage.message.mimeType,
        },
      ],
    })
  })

  it('throws ValidationError when no jid', () => {
    expect(() => {
      inboundMessageToActivity({
        ...inboundMessage,
        from: {
          name: 'Boss',
        },
      })
    }).toThrowError('from.jid is undefined')
  })

  it('throws ValidationError when no from.name', () => {
    expect(() => {
      inboundMessageToActivity({
        ...inboundMessage,
        from: {
          jid: '1345',
        },
      })
    }).toThrowError('from.name is undefined')
  })
})
