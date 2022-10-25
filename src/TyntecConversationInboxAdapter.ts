import {
  Activity,
  BotAdapter,
  ConversationReference,
  ResourceResponse,
  TurnContext,
  WebRequest,
  WebResponse,
} from 'botbuilder'
import { ApiClient, OpenAPIConfig, SendMessageResponse } from './api'
import { InboundMessage } from './api/generated/models/InboundMessage'
import { SendTextMessageBodyType } from './api/generated/models/SendTextMessageBodyType'
import { inboundMessageToActivity } from './activity'
import { ValidationError } from './errors'

export interface TyntecConversationInboxAdapterConfig
  extends Pick<OpenAPIConfig, 'TOKEN'> {}

export class TyntecConversationInboxAdapter extends BotAdapter {
  private readonly apiClient: ApiClient = <any>{}

  private readonly whatsAppChannelJid: string = 'whatsapp.eazy.im'

  constructor(config: TyntecConversationInboxAdapterConfig) {
    super()

    this.apiClient = new ApiClient(config)
  }

  public sendMessage = async (
    channelJid: string,
    contactJid: string,
    message: SendTextMessageBodyType,
  ): Promise<SendMessageResponse> =>
    this.apiClient.messaging.sendMessage({
      channelJid,
      contactJid,
      requestBody: {
        message,
      },
    })

  public sendMessageToWhatsApp = async (
    contactJid: string,
    requestBody: SendTextMessageBodyType,
  ) => this.sendMessage(this.whatsAppChannelJid, contactJid, requestBody)

  public async sendActivities(
    _context: TurnContext,
    activities: Partial<Activity>[],
  ): Promise<ResourceResponse[]> {
    const promises = activities
      .filter((activity) => activity.conversation && activity.text)
      .map((activity) =>
        this.sendMessage(activity.channelId!, activity.conversation!.id, {
          type: 'text',
          body: activity.text!,
        }),
      )

    return Promise.all(promises)
  }

  public continueConversation(
    reference: Partial<ConversationReference>,
    logic: (revocableContext: TurnContext) => Promise<void>,
  ): Promise<void> {
    const activity = TurnContext.applyConversationReference(
      { type: 'event', name: 'continueConversation' },
      reference,
      true,
    )

    const context = new TurnContext(this, activity)
    return this.runMiddleware(context, logic)
  }

  public async processIncomingMessage(
    req: WebRequest,
    res: WebResponse,
    logic: (context: TurnContext) => Promise<any>,
  ): Promise<void> {
    const body = (await this.getRequestBody(req)) as InboundMessage

    try {
      const activity = inboundMessageToActivity(body)

      const context = new TurnContext(this, activity)
      await this.runMiddleware(context, logic)

      res.status(200)
      res.end()
    } catch (e) {
      if (e instanceof ValidationError) {
        res.status(400)
        res.send(`${e.name}: ${e.message}`)
        res.end()
      } else {
        res.send(`Failed to process incoming message: ${e}`)
        res.status(500)
        res.end()
      }
    }
  }

  public updateActivity(
    _context: TurnContext,
    _activity: Partial<Activity>,
  ): Promise<void | ResourceResponse> {
    throw new Error('Method not implemented.')
  }

  public deleteActivity(
    _context: TurnContext,
    _reference: Partial<ConversationReference>,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  private getRequestBody = async (req: WebRequest) =>
    new Promise(
      (resolve: (value: unknown) => void, reject: (reason?: any) => void) => {
        if (req.body !== undefined) {
          return resolve(req.body)
        }

        let requestJson = ''
        req.on!('data', (chunk: string) => {
          requestJson += chunk
        })

        req.on!('end', (): void => {
          try {
            resolve(JSON.parse(requestJson))
          } catch (e) {
            reject(e)
          }
        })
      },
    )
}
