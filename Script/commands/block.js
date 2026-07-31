module.exports.config = {
  name: "block",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "ChatGPT",
  description: "Funny block command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("❌ একজনকে মেনশন করুন!", threadID, messageID);

  const uid = Object.keys(mentions)[0];
  const name = await Users.getNameUser(uid);

  api.sendMessage(
`🚫 ${name}

🔒 আপনাকে মজার ছলে "ব্লক" করা হয়েছে! 😂
(এটি বাস্তবে কাউকে ব্লক করে না।)`,
    threadID,
    messageID
  );
};
