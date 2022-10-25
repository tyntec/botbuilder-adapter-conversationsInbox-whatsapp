/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SendMessageRequestBody } from '../models/SendMessageRequestBody';
import type { SendMessageResponse } from '../models/SendMessageResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MessagingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Send a message
   * Request to send a message to a contact in a channel.
   *
   * The JSON body structure of each message type is listed below.
   *
   * **Audio**
   *
   * | **Element** | **Value**  | **Mandatory**  | **Description**  |
   * | ---         | ---       | ---           | ---              |
   * | mimeType    | string    | Y             |MIME type         |
   * |type          | "audio"  | Y             | Message type     |
   *
   * **Contact**
   *
   * | **Element** | **Value**  | **Mandatory**  | **Description**   |
   * | ---         | ---       | ---           | ---               |
   * | contacts  | array   | Y             | Contact structure |
   * | type      | "contact" | Y            | Message type      |
   *
   * **Document**
   *
   * | **Element** | **Value**  | **Mandatory**  | **Description**  |
   * | ---         | ---       | ---           | ---              |
   * | fileName  | string  | Y              | File name        |
   * | mimeType  | string  | Y              | MIME type        |
   * | title     | string  | Y             | Document title   |
   * | type        | "document"| Y           | Message type     |
   *
   * **Gif**
   *
   * | **Element** | **Value**  | **Mandatory**  | **Description**      |
   * | ---         | ---       | ---           | ---                  |
   * | caption      | string  | N             | Caption text message |
   * | mimeType  | string  | Y           | MIME type            |
   * | type      | "gif"   | Y             | Message type         |
   *
   * **Image**
   *
   * | **Element** | **Value**  | **Mandatory**  | **Description**      |
   * | ---         | ---       | ---           | ---                  |
   * | caption     | string   | N             | Caption text message |
   * | mimeType  | string  | Y             | MIME type            |
   * | type        | "image"   | Y           | Message type         |
   *
   * **Location**
   *
   * | **Element** | **Value**   | **Mandatory**  | **Description**         |
   * | ---         | ---        | ---              | ---                     |
   * | latitude  | float  Y   | Latitude         | coordinate              |
   * | longitude  | float  Y   | Longitude        | coordinate              |
   * | name      | string   | N                | Name of the location    |
   * | type      | "location" | Y                | Message type            |
   * | url          | string   | N                | Website URL             |
   *
   * **Voice message**
   *
   * | **Element** | **Value** | **Mandatory** | **Description**   |
   * | ---         | ---       | ---           | ---               |
   * | mimeType    | string    | Y             | MIME type         |
   * | type        | "ptt"     | Y             | Message type      |
   *
   * **Sticker**
   *
   * | **Element** | **Value**  | **Mandatory**  | **Description**   |
   * | ---         | ---       | ---           | ---               |
   * | mimeType  | string  | Y             | MIME type         |
   * | type        | "sticker"  | Y             | Message type      |
   *
   * **Template**
   *
   * | **Element** | **Value**   | **Mandatory**  | **Description**     |
   * | ---         | ---        | ---              | ---                 |
   * | template  | array      | Y                | Template structure  |
   * | type        | "template" | Y                | Message type        |
   *
   * **Text**
   *
   * | **Element** | **Value**  | **Mandatory**  | **Description**   |
   * | ---         | ---       | ---           | ---               |
   * | body        | string  | Y             | Message body      |
   * | type        | "text"  | Y             | Message type      |
   *
   * **Video**
   *
   * | **Element** | **Value**  | **Mandatory**  | **Description**       |
   * | ---         | ---       | ---           | ---                   |
   * | caption     | string  | N             | Caption text message  |
   * | mimeType  | string  | Y             | MIME type             |
   * | type        | "video"  | Y             | Message type          |
   *
   * @returns SendMessageResponse Accepted
   * @throws ApiError
   */
  public sendMessage({
    channelJid,
    contactJid,
    requestBody,
  }: {
    /**
     * Jabber IDs to represent channel
     */
    channelJid: string,
    /**
     * Jabber IDs to represent contacts
     */
    contactJid: string,
    /**
     * The message you would like to send
     */
    requestBody: SendMessageRequestBody,
  }): CancelablePromise<SendMessageResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v3/channels/{channelJid}/messages/{contactJid}',
      path: {
        'channelJid': channelJid,
        'contactJid': contactJid,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
