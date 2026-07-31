module.exports.config = {
  name: "grave",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny grave command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions, senderID } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("⚰️ একজনকে মেনশন করুন!", threadID, messageID);

  const targetID = Object.keys(mentions)[0];

  const senderName = await Users.getNameUser(senderID);
  const targetName = await Users.getNameUser(targetID);

  const texts = [
    "⚰️ রহস্যময় একটি কবরের সামনে দাঁড়িয়ে আছে...",
    "🌙 মধ্যরাতে কবরস্থান থেকে অদ্ভুত শব্দ শোনা গেল...",
    "👻 কুয়াশার মধ্যে হঠাৎ একটি ছায়া দেখা দিল...",
    "🕯️ পুরনো কবরের পাশে একটি মোমবাতি জ্বলছে...",
    "🌫️ কবরস্থানের বাতাসে অদ্ভুত নীরবতা নেমে এসেছে..."
  ];

  const text = texts[Math.floor(Math.random() * texts.length)];

  api.sendMessage(
`⚰️ 𝗚𝗥𝗔𝗩𝗘 ⚰️

😈 ${senderName} মজার ছলে ${targetName}-কে একটি ভৌতিক কবরস্থানে নিয়ে গেছে!

${text}

💀 Horror Level: ${Math.floor(Math.random() * 101)}%

😂 এটি সম্পূর্ণ কাল্পনিক ও বিনোদনের জন্য।`,
    threadID,
    messageID
  );
};
