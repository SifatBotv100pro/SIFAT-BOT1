module.exports.config = {
  name: "fork",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mukul",
  description: "Show bot repository",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const msg = `
╭━━━━━━━━━━━━━━━╮
┃ 🌿 𝗕𝗢𝗧 𝗙𝗢𝗥𝗞
┣━━━━━━━━━━━━━━━┫
┃ 🤖 Bot: ${global.config.BOTNAME || "HAMSTER BOT"}
┃ 👑 Owner: Mukul
┃
┃ 🔗 GitHub:
┃ https://github.com/mukul-bot-v60/Hamster-.git
┃
┃ ⭐ Fork & Star করলে
┃ অনেক উপকার হবে ❤️
╰━━━━━━━━━━━━━━━╯`;

  api.sendMessage(msg, event.threadID, event.messageID);
};
