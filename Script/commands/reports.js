module.exports.config = {
  name: "report",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "How to report a Facebook account",
  commandCategory: "utility",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage(
`📢 Facebook Report Guide

১️⃣ যে প্রোফাইলটি রিপোর্ট করতে চান সেটি খুলুন।
২️⃣ ⋯ (তিন ডট) চাপুন।
৩️⃣ "Find support or report" নির্বাচন করুন।
৪️⃣ উপযুক্ত কারণ (Fake account, Scam, Harassment ইত্যাদি) নির্বাচন করুন।
৫️⃣ Submit করুন।

⚠️ শুধুমাত্র প্রকৃত নীতিমালা লঙ্ঘনের ক্ষেত্রেই রিপোর্ট করুন।`,
    event.threadID,
    event.messageID
  );
};
