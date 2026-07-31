module.exports.config = {
  name: "emoji",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "ChatGPT",
  description: "Change group emoji",
  commandCategory: "group",
  usages: "[emoji]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;

  if (!args[0]) {
    return api.sendMessage(
      "📝 ব্যবহার:\n.emoji 😎",
      threadID,
      messageID
    );
  }

  const emoji = args.join(" ");

  api.changeThreadEmoji(emoji, threadID, (err) => {
    if (err) {
      return api.sendMessage(
        "❌ গ্রুপের ইমোজি পরিবর্তন করা যায়নি। নিশ্চিত করুন বটটি গ্রুপ অ্যাডমিন।",
        threadID,
        messageID
      );
    }

    api.sendMessage(
      `✅ গ্রুপের ইমোজি পরিবর্তন করা হয়েছে: ${emoji}`,
      threadID,
      messageID
    );
  });
};
