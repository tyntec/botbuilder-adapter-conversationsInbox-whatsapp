# Tyntec Conversation Inbox Adapter

A [Microsoft Bot Framework](https://www.botframework.com/) adapter for handling
connectivity with the channel in tyntec Conversations API.

It is a TypeScript library that allows your bots to use WhatsApp through the
tyntec Conversations API. The adapter supports two-way (incoming and outgoing)
messaging with templates, free-form and rich media.

Look how easy it is to use:

```typescript
import express from 'express'

import { TyntecConversationInboxAdapter } from '../src/TyntecConversationInboxAdapter'

const adapter = new TyntecConversationInboxAdapter({
  TOKEN: 'some-token', // Fill your Tyntec token
})

const app = express()

// ... your bot and server initialization ...

app.post('/incoming', (req, res) => {
  adapter.processIncomingMessage(req, res, (context) => myBot.run(context))
})

app.listen(3000)
```

You can find the full quick start guide in the [tyntec Docs Center](https://www.tyntec.com/docs/whatsapp-business-api-integration-microsoft-bot-framework).

## Installation

Install Tyntec WhatsApp Adapter by running:

```shell
$ npm install botbuilder-adapter-tyntec-conversation-inbox
```

## Features

At the moment, the adapter supports only:

- receiving WhatsApp messages (`processIncomingMessage`),
- sending WhatsApp messages (`sendActivities`) and
- sending WhatsApp messages proactively (`continueConversation`).

## Support

If you are having issues, please let us know

- either via https://www.tyntec.com/get-help-support
- or support@tyntec.com

## Release

To release new version just push into `main`. To release beta push into `beta` branch. `@semantic-release/commit-analyzer` is used to decide how to increment version and compose CHANGELOG.

## License

This project is distributed under the MIT license.
