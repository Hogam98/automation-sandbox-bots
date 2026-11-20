const bots = require("../core/discord-bots/index.js");

const DISCORD_CHANNELS = [
  {
    name: "Sandbox",
    channelIdSecret: "SANDBOX_CHANNEL_ID",
    webhookIdSecret: "SANDBOX_WEBHOOK_ID",
    webhookTokenSecret: "SANDBOX_WEBHOOK_TOKEN",
    language: "Multilingual"
  }
];

module.exports = async function (context) {
  await bots.run(context, {
    channels: DISCORD_CHANNELS,
    allowBotInteraction: true
  });
};
