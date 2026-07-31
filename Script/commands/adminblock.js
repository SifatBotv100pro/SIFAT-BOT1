module.exports.config = {
  name: "adminblock",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "ChatGPT",
  description: "Block a user from using the bot",
  commandCategory: "admin",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, mentions } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("❌ একজনকে মেনশন করুন।", threadID, messageID);

  const uid = Object.keys(mentions)[0];

  if (!global.data.blockUsers)
    global.data.blockUsers = new Set();

  global.data.blockUsers.add(uid);

  api.sendMessage("✅ ব্যবহারকারীকে বট থেকে ব্লক করা হয়েছে।", threadID, messageID);
};
