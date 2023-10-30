/**
 * @name Telegram Bot
 * @version 1.0.0
 * @description 🍉 仅作学术探讨，Node版本实现。
 * @public false
 * @on_start false
 * @create_at 2023-05-30 08:16:23
 * @icon https://core.telegram.org/img/website_icon.svg?4
 * @form {key: "tg.token", title: "机器人Token"}
 * @form {key: "tg.url", title: "反向代理地址"}
 * @disable true
 * @class 机器人 Telegram
 */

const {
  sender: s,
  Bucket
} = require("sillygirl");
(async function () {

  const db = new Bucket("tg");
  const TelegramBot = require(`node-telegram-bot-api`);

  let bot_id = "";
  let tgBot = undefined;

  let baseApiUrl = await db.get("url")
  if (!baseApiUrl) {
    baseApiUrl = "https://api.telegram.org"
    db.set("url", baseApiUrl)
  }

  while (!bot_id) {
    try {
      const token = await db.get("token");
      if (!token) {
        await sleep(1000);
        continue;
      }
      tgBot = new TelegramBot(token, {
        polling: true,
        baseApiUrl,
      });
      bot_id = (await tgBot.getMe()).id;
    } catch (e) {
      console.log("tgbot连接失败：", e);
    }
    await sleep(1000);
  }
  const adapter = new Adapter({
    platform: "tg",
    bot_id: `${bot_id}`,
    replyHandler: async (message) => {
      try {
        let items = parseCQText(message.content);
        let contents = [];
        let images = [];
        let videos = [];
        const [chat_id, message_id] = message.message_id.split(".");
        let result = undefined;
        for (let item of items) {
          if (typeof item == "string") {
            contents.push(item);
          }
          if (item.type == "image") {
            images.push(item?.params?.file ?? item?.params?.url);
          }
          if (item.type == "video") {
            videos.push(item?.params?.file ?? item?.params?.url);
          }
        }
        let content = contents.join("\n");
        if (images.length) {
          result = await tgBot.sendPhoto(chat_id, images[0], {
            caption: content,
            reply_to_message_id: message_id ? +message_id : 0,
          });
        } else if (videos.length) {
          result = await tgBot.sendVideoNote(chat_id, videos[0], {
            caption: content,
            reply_to_message_id: message_id ? +message_id : 0,
          });
        } else if (contents.length == 0) {
        } else {
          result = await tgBot.sendMessage(chat_id, content, {
            reply_to_message_id: message_id ? +message_id : 0,
          });
        }
        if (result) {
          return `${result.chat.id}.${result.message_id}`;
        } else {
          return;
        }
      } catch (e) {
        console.log(e);
      }
    },
    actionHandler: async (action) => {
      switch (action.type) {
        case "delete_message":
          const { message_id } = action;
          let [chatid, sendid] = message_id.split(".");
          tgBot.deleteMessage(chatid, sendid);
          break;
        default:
      }
      return;
    },
  });
  await sleep(1000);
  tgBot.on("message", (req) => {
    try {
      let message = {
        user_id: req["from"]["id"] + "" || "",
        user_name: req["from"]["username"] || "",
        chat_id:
          req["chat"]["type"] !== "private" ? req["chat"]["id"] + "" : "0",
        chat_name: req["group_name"] || "",
        content: req["text"] || "",
        message_id: `${req["chat"]["id"]}.${req["message_id"]}` || "",
      };
      adapter.receive(message);
    } catch (e) {
      console.log(e);
    }
  });
})();
