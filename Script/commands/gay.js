module.exports.config = {
  name: "gay",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny random percentage",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions, senderID } = event;

  const targetID = Object.keys(mentions)[0] || senderID;
  const name = await Users.getNameUser(targetID);

  const percent = Math.floor(Math.random() * 101);

  api.sendMessage(
`🌈 𝗙𝗨𝗡 𝗠𝗘𝗧𝗘𝗥 🌈

👤 ${name}

📊 Result: ${percent}%

😂 এটি শুধুই মজার জন্য তৈরি একটি র্যান্ডম রেজাল্ট।`,
    threadID,
    messageID
  );
};
