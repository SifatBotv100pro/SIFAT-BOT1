const axios = require('axios');

module.exports.config = {
    name: "paste",
    version: "1.0.8",
    hasPermission: 0,
    credits: "Rahat",
    description: "টেক্সট পেস্ট করে শুধু টেক্সট রিটার্ন করে",
    usePrefix: false,
    commandCategory: "utility",
    usages: "/paste [টেক্সট]",
    cooldowns: 5,
    aliases: ["p"]
};

module.exports.run = async function ({ api, event, args }) {
    const content = args.join(" ");
    if (!content) {
        return api.sendMessage(
            "❌ কিছু টেক্সট লিখুন। যেমন: /paste কেমন আছো।",
            event.threadID,
            event.messageID
        );
    }

    try {
        const response = await axios.post(
            "https://rahat-pasteben-ten.vercel.app/api/paste",
            { content },
            {
                headers: { "Content-Type": "application/json" },
                // রেসপন্স টাইপ টেক্সট রাখছি
                responseType: 'text'
            }
        );

        let pasteText = response.data;

        // 🔥 যদি ডেটা স্ট্রিং হয়, তাহলে JSON পার্স করার চেষ্টা
        if (typeof pasteText === 'string') {
            try {
                const parsed = JSON.parse(pasteText);
                // JSON থেকে content বা link বা যাই হোক বের করি
                if (parsed.content) {
                    pasteText = parsed.content;
                } else if (parsed.link) {
                    pasteText = parsed.link;
                } else if (parsed.data && parsed.data.content) {
                    pasteText = parsed.data.content;
                } else {
                    // কোনো নির্দিষ্ট ফিল্ড না পেলে পুরো অবজেক্ট স্ট্রিং করি
                    pasteText = JSON.stringify(parsed);
                }
            } catch (e) {
                // JSON না হলে, স্ট্রিং-ই রাখি
            }
        }

        // ✅ যদি টেক্সট থাকে, তাহলে দেখাই
        if (pasteText && pasteText !== '{}' && pasteText !== '[]') {
            return api.sendMessage(
                `✅ পেস্ট তৈরি!\n📝 ${pasteText}`,
                event.threadID,
                event.messageID
            );
        } else {
            return api.sendMessage(
                "⚠️ পেস্ট তৈরি হয়েছে কিন্তু টেক্সট খালি।",
                event.threadID,
                event.messageID
            );
        }
    } catch (error) {
        console.error("❌ Paste Error:", error.response?.data || error.message);
        return api.sendMessage(
            "❌ সার্ভার এরর। পরে চেষ্টা করুন।",
            event.threadID,
            event.messageID
        );
    }
};
