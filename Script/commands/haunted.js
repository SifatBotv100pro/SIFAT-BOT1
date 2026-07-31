module.exports.config = {
  name: "haunted",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny haunted command",
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

  const stories = [
    "👻 মাঝরাতে একটি পুরনো বাড়ি থেকে রহস্যময় শব্দ শুনতে পেল!",
    "🕯️ হঠাৎ সব আলো নিভে গেল, শুধু একটি মোমবাতি জ্বলছিল!",
    "🌫️ কুয়াশার ভেতর একটি অদ্ভুত ছায়া দেখা গেল!",
    "💀 দরজায় তিনবার টোকা পড়ল... কিন্তু বাইরে কেউ ছিল না!",
    "🧟 আয়নায় নিজের পেছনে একটি ছায়ামূর্তি দেখতে পেল!"
  ];

  const story = stories[Math.floor(Math.random() * stories.length)];

  api.sendMessage(
`🏚️ 𝗛𝗔𝗨𝗡𝗧𝗘𝗗 🏚️

😈 ${senderName} ভুল করে ${targetName}-কে একটি ভূতুড়ে বাড়িতে পাঠিয়ে দিয়েছে!

${story}

🎃 ভয়ের মাত্রা: ${Math.floor(Math.random() * 101)}%

😂 এটি শুধুই মজার জন্য তৈরি একটি কাল্পনিক কমান্ড।`,
    threadID,
    messageID
  );
};
