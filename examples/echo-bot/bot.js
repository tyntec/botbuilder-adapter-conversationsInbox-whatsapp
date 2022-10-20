// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder')

class EchoBot extends ActivityHandler {
  constructor() {
    super()
    // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
    this.onMessage(async (context, next) => {
      const replyText = `Echo: ${context.activity.text}`
      console.log(`Replaying with: ${replyText}`)

      try {
        await context.sendActivity(MessageFactory.text(replyText))
        // By calling next() you ensure that the next BotHandler is run.
        await next()
      } catch (e) {
        console.log(`Error sending a response: ${e}`)
      }
    })

    this.onMembersAdded(async (context, next) => {
      const membersAdded = context.activity.membersAdded
      const welcomeText = 'Hello and welcome!'
      for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
        if (membersAdded[cnt].id !== context.activity.recipient.id) {
          await context.sendActivity(
            MessageFactory.text(welcomeText, welcomeText),
          )
        }
      }
      // By calling next() you ensure that the next BotHandler is run.
      await next()
    })
  }
}

module.exports.EchoBot = EchoBot
