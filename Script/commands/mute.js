module.exports.config = {
  name: "mute",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "ChatGPT",
  description: "Mute a user in bot",
  commandCategory: "group",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, mentions } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("❌ একজনকে মেনশন করুন!", threadID, messageID);

  const uid = Object.keys(mentions)[0];
  const name = mentions[uid].replace("@", "");

  if (!global.data.mutedUsers)
    global.data.mutedUsers = new Set();

  global.data.mutedUsers.add(uid);

  api.sendMessage(
    `🔇 ${name} কে বটে মিউট করা হয়েছে।`,
    threadID,
    messageID
  );
};
