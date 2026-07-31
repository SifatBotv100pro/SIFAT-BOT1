module.exports.config = {
  name: "possessed",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny possessed command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions, senderID } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("👻 একজনকে মেনশন করুন!", threadID, messageID);

  const targetID = Object.keys(mentions)[0];

  const senderName = await Users.getNameUser(senderID);
  const targetName = await Users.getNameUser(targetID);

  const effects = [
    "👁️ চোখ হঠাৎ লাল হয়ে গেছে!",
    "🌫️ চারপাশে ঘন কালো কুয়াশা ছড়িয়ে পড়েছে!",
    "🕯️ সব মোমবাতি একসাথে জ্বলে উঠল!",
    "👻 রহস্যময় হাসির শব্দ শোনা যাচ্ছে...",
    "💀 হঠাৎ ঠান্ডা বাতাস বইতে শুরু করেছে!"
  ];

  const effect = effects[Math.floor(Math.random() * effects.length)];
  const level = Math.floor(Math.random() * 101);

  api.sendMessage(
`👻 𝗣𝗢𝗦𝗦𝗘𝗦𝗦𝗘𝗗 👻

😈 ${senderName} মজা করে ${targetName}-কে একটি ভৌতিক গল্পের চরিত্র বানিয়ে দিয়েছে!

${effect}

🔮 Horror Level: ${level}%

😂 এটি সম্পূর্ণ কাল্পনিক ও বিনোদনের জন্য তৈরি।`,
    threadID,
    messageID
  );
};
