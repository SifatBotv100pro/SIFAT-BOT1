module.exports.config = {
  name: "police",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny police command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions, senderID } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("🚔 একজনকে মেনশন করুন!", threadID, messageID);

  const targetID = Object.keys(mentions)[0];

  const senderName = await Users.getNameUser(senderID);
  const targetName = await Users.getNameUser(targetID);

  const reasons = [
    "চা খেয়ে টাকা না দেওয়ার অভিযোগে",
    "অতিরিক্ত ঘুমানোর অভিযোগে",
    "সারাদিন অনলাইনে থাকার অভিযোগে",
    "বন্ধুদের বিরক্ত করার অভিযোগে",
    "মিম চুরি করার অভিযোগে",
    "অকারণে সবাইকে ট্যাগ করার অভিযোগে"
  ];

  const reason = reasons[Math.floor(Math.random() * reasons.length)];

  api.sendMessage(
`🚔 𝗣𝗢𝗟𝗜𝗖𝗘 𝗥𝗘𝗣𝗢𝗥𝗧 🚔

👮 অফিসার: ${senderName}
🙍 আসামি: ${targetName}

📋 অভিযোগ:
${reason}

⛓️ সাজা:
২৪ ঘণ্টা গ্রুপে সবাইকে হাসানোর দায়িত্ব! 😂`,
    threadID,
    messageID
  );
};
