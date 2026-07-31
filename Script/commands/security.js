module.exports.config = {
  name: "security",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Facebook security tips",
  commandCategory: "utility",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage(
`🔒 Facebook Security Tips

✅ শক্তিশালী পাসওয়ার্ড ব্যবহার করুন।
✅ Two-Factor Authentication (2FA) চালু করুন।
✅ অপরিচিত লিংকে ক্লিক করবেন না।
✅ Login Alerts চালু রাখুন।
✅ নিয়মিত Security Checkup করুন।

🛡️ নিজের অ্যাকাউন্ট নিরাপদ রাখুন।`,
    event.threadID,
    event.messageID
  );
};
