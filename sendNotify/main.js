/**
* @title sendNotify
* @create_at 2023-10-21 14:02:13
* @description 推送通知，修改自青龙sendNotify,未完全测试
* @author https://t.me/sillyGirl_Plugin
* @module true
* @version v1.0.0
*/

/**
 * @param text 通知头
 * @param desp 通知体
 * @param params 某些推送通知方式点击弹窗可跳转, 例：{ url: 'https://abc.com' }
 * @param author 作者等信息  例：`本通知 By：https://t.me/sillyGirl_Plugin`
 * @param selector 通知选择器，未处于选择数组内的渠道不通知，默认通知所有渠道 ["wxpush","tgbot","ddbot","qywxbot","qywxapp","weserver","pushplus","gocqhttp","pushdeer","gotify","synologychat","bark","igot","coolpush","aibotk","fsbot"]
 * 
 * 
 * sendNotify(text,desp,params,author,selector)
 */





const Form = (data) => { }

Form({
  title: "wxpush配置",
  valueType: "group",
  columns: [
    {
      title: "UID",
      key: "notify.wxpush_uid",
      tooltip: "关注公众号：wxpusher，然后点击「我的」-「我的UID」查询到UID"
    },
    {
      title: "token",
      // width: "100px",
      key: "notify.wxpush_token",
      tooltip: "wxpush后台:https://wxpusher.zjiecode.com/admin/ 创建应用后获取"
    }
  ]
})
Form({
  title: "gotify配置",
  valueType: "group",
  columns: [
    {
      title: "地址",
      key: "notify.gotify_url",
      tooltip: "示例：https://push.example.de:8080"
    },
    {
      title: "token",
      width: "100px",
      key: "notify.gotify_token",
      tooltip: "填写gotify的消息应用token"
    },
    {
      title: "优先级",
      key: "notify.gotify_priority",
      tooltip: "推送消息优先级,默认为0"
    }
  ]
})
Form({
  title: "gocqhttp通知配置",
  valueType: "group",
  columns: [
    {
      title: "地址",
      key: "notify.gocq_url",
      tooltip: "示例：https://push.example.de:8080，gocq配置见 https://docs.go-cqhttp.org/guide/config.html#%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF"
    },
    {
      title: "token",
      key: "notify.gocq_token",
      tooltip: "gocqhtt配置文件设置的访问密钥"
    },
    {
      title: "QQ",
      key: "notify.gocq_id",
      tooltip: "推送到个人QQ或者QQ群号"
    }
  ]
})
Form({
  title: "微信server酱配置",
  valueType: "group",
  columns: [
    {
      title: "申请的SCKEY",
      key: "notify.sckey"
      //tooltip: "申请的SCKEY"
    }
  ]
})
Form({
  title: "PushDeer通知设置区域",
  valueType: "group",
  columns: [
    {
      title: "地址",
      key: "notify.pushdeer_url",
      tooltip: "示例：https://push.example.de:8080"
    },
    {
      title: "密钥",
      key: "notify.pushdeer_key",
      tooltip: "申请的PushDeer KEY"
    }
  ]
})
Form({
  title: "Synology Chat通知设置",
  valueType: "group",
  columns: [
    {
      title: "地址",
      key: "notify.chat_url",
      tooltip: "示例：https://push.example.de:8080"
    },
    {
      title: "密钥",
      key: "notify.chat_token",
      tooltip: "设置的token"
    }
  ]
})
Form({
  title: "Bark App通知设置",
  valueType: "group",
  columns: [
    {
      title: "IP/设备码",
      key: "notify.bark_url",
      tooltip: "例如：https://api.day.app/XXXXXXXX"
    },
    {
      title: "推送图标",
      key: "notify.bark_icon",
      tooltip: "自定义推送图标"
    },
    {
      title: "推送铃声",
      key: "notify.bark_sound",
      tooltip: "铃声列表去APP查看复制填写"
    },
    {
      title: "分组",
      key: "notify.bark_group",
      tooltip: "推送消息的分组, 默认为sillyplus"
    }
  ]
})
Form({
  title: "telegram机器人通知设置",
  valueType: "group",
  columns: [
    {
      title: "token",
      key: "notify.tgbot_token",
      tooltip: "@BotFather申请机器人后获得的token"
    },
    {
      title: "推送目标账号ID",
      key: "notify.tgbot_id",
      //tooltip: "自定义推送图标"
    },
    {
      title: "Telegram机器人代理设置",
      valueType: "group",
      columns: [
        // {
        //   title: "代理地址",
        //   key: "notify.tgbot_proxyhost",
        //   tooltip: "例如:127.0.0.1"
        // },
        // {
        //   title: "代理端口",
        //   key: "notify.tgbot_proxyport",
        //   tooltip: "例如:127.0.0.1"
        // },
        // {
        //   title: "代理认证参数",
        //   key: "notify.tgbot_proxyauth",
        //   tooltip: "例如:127.0.0.1"
        // },
        {
          title: "自建反向地址",
          key: "notify.tgbot_apihost",
          tooltip: "例如:https://domain.com/tgproxy"
        }
      ]
    }
  ]
})
Form({
  title: "钉钉机器人通知设置",
  valueType: "group",
  columns: [
    {
      title: "token",
      key: "notify.ddbot_token",
      tooltip: "钉钉机器人的webhook，例如：5a544165465465645d0f31dca676e7bd07415asdasd"
    },
    {
      title: "密钥",
      key: "notify.ddbot_secret",
      tooltip: "密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串"
    }
  ]
})
Form({
  title: "企业微信通知设置",
  valueType: "group",
  columns: [
    {
      title: "企业微信机器人webhook",
      key: "notify.qywxbot_key",
      tooltip: "详见文档 https://work.weixin.qq.com/api/doc/90000/90136/91770"
    },
    {
      title: "企业微信应用消息",
      key: "notify.qywxapp_am",
      tooltip: " 依次填入corpid,corpsecret,touser,agentid"
    }
  ]
})
Form({
  title: "iGot通知设置",
  valueType: "group",
  columns: [
    {
      title: "iGot的推送key",
      key: "notify.igot_key",
      tooltip: "例如：https://push.hellyw.com/XXXXXXXX"
    }
  ]
})
Form({
  title: "微信pushplus配置",
  valueType: "group",
  tooltip: "官方文档：http://www.pushplus.plus/",
  columns: [
    {
      title: "token",
      key: "notify.pushplus_token",
      tooltip: "微信扫码登录后一对一推送或一对多推送下面的token，不提供PUSH_PLUS_USER则默认为一对一推送"
    },
    {
      title: "一对多推送的群组编码",
      key: "notify.qywxapp_am",
      tooltip: "一对多推送下面->您的群组->群组编码，如果您是创建群组人。也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送"
    }
  ]
})
// Form({
//   title: "Cool Push配置",
//   valueType: "group",
//   tooltip: "官方文档：https://cp.xuthus.cc/docs",
//   columns: [
//     {
//       title: "key",
//       key: "notify.coolpush_skey",
//       tooltip: "Cool Push登录授权后推送消息的调用代码Skey"
//     },
//     {
//       title: "推送模式",
//       key: "notify.coolpush_mode",
//       tooltip: "详情请登录获取QQ_SKEY后见https://cp.xuthus.cc/feat"
//     }
//   ]
// })
Form({
  title: "智能微秘书设置",
  valueType: "group",
  tooltip: "官方文档：http://wechat.aibotk.com/docs/about",
  columns: [
    {
      title: "Api Key",
      key: "notify.aibotk_key",
      tooltip: "智能微秘书个人中心的apikey"
    },
    {
      title: "推送模式",
      key: "notify.aibotk_type",
      tooltip: "发送的目标room或contact,"
    },
    {
      title: "推送模式",
      key: "notify.aibotk_name",
      tooltip: "群名或用户昵称，和上面的type类型要对应"
    }
  ]
})
Form({
  title: "飞书机器人设置",
  valueType: "group",
  tooltip: "官方文档：https://www.feishu.cn/hc/zh-CN/articles/360024984973",
  columns: [
    {
      title: "飞书机器人的FSKEY",
      key: "notify.fsbot_key"
    }
  ]
})

const { sender: s, Bucket, sleep, utils: { buildCQTag, image, video }, } = require("sillygirl");




const timeout = 15000; //超时时间(单位毫秒)
const db = new Bucket("notify")
var SELECTOR = ["wxpush", "tgbot", "ddbot", "qywxbot", "qywxapp", "weserver", "pushplus", "gocqhttp", "pushdeer", "gotify", "synologychat", "bark", "igot", "coolpush", "aibotk", "fsbot"]


// =======================================wxpusher通知设置区域==============================================
//wxpush_uid 关注公众号：wxpusher，然后点击「我的」-「我的UID」查询到UID
//wxpush_token 后台https://wxpusher.zjiecode.com/admin/ 创建应用后得到
let WXPUSH_UID = "";
let WXPUSH_TOKEN = "";

// =======================================gotify通知设置区域==============================================
//gotify_url 填写gotify地址,如https://push.example.de:8080
//gotify_token 填写gotify的消息应用token
//gotify_priority 填写推送消息优先级,默认为0
let GOTIFY_URL = '';
let GOTIFY_TOKEN = '';
let GOTIFY_PRIORITY = 0;
// =======================================go-cqhttp通知设置区域===========================================
//gobot_url 填写请求地址http://127.0.0.1/send_private_msg
//gobot_token 填写在go-cqhttp文件设置的访问密钥
//gobot_qq 填写推送到个人QQ或者QQ群号
//go-cqhttp相关API https://docs.go-cqhttp.org/api
let GOBOT_URL = ''; // 推送到个人QQ: http://127.0.0.1/send_private_msg  群：http://127.0.0.1/send_group_msg
let GOBOT_TOKEN = ''; //访问密钥
let GOBOT_QQ = ''; // 如果GOBOT_URL设置 /send_private_msg 则需要填入 user_id=个人QQ 相反如果是 /send_group_msg 则需要填入 group_id=QQ群

// =======================================微信server酱通知设置区域===========================================
//此处填你申请的SCKEY.
//(环境变量名 PUSH_KEY)
let SCKEY = '';

// =======================================PushDeer通知设置区域===========================================
//此处填你申请的PushDeer KEY.
//(环境变量名 DEER_KEY)
let PUSHDEER_KEY = '';
let PUSHDEER_URL = '';

// =======================================Synology Chat通知设置区域===========================================
//此处填你申请的CHAT_URL与CHAT_TOKEN
//(环境变量名 CHAT_URL CHAT_TOKEN)
let CHAT_URL = '';
let CHAT_TOKEN = '';

// =======================================Bark App通知设置区域===========================================
//此处填你BarkAPP的信息(IP/设备码，例如：https://api.day.app/XXXXXXXX)
let BARK_PUSH = '';
//BARK app推送图标,自定义推送图标(需iOS15或以上)
let BARK_ICON = 'https://raw.githubusercontent.com/LevenYi/bot_sources/main/icon.png';
//BARK app推送铃声,铃声列表去APP查看复制填写
let BARK_SOUND = '';
//BARK app推送消息的分组, 默认为"QingLong"
let BARK_GROUP = 'sillyPlus';

// =======================================telegram机器人通知设置区域===========================================
//此处填你telegram bot 的Token，telegram机器人通知推送必填项.例如：1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw
//(环境变量名 TG_BOT_TOKEN)
let TG_BOT_TOKEN = '';
//此处填你接收通知消息的telegram用户的id，telegram机器人通知推送必填项.例如：129xxx206
//(环境变量名 TG_USER_ID)
let TG_USER_ID = '';
//tg推送HTTP代理设置(不懂可忽略,telegram机器人通知推送功能中非必填)
let TG_PROXY_HOST = ''; //例如:127.0.0.1(环境变量名:TG_PROXY_HOST)
let TG_PROXY_PORT = ''; //例如:1080(环境变量名:TG_PROXY_PORT)
let TG_PROXY_AUTH = ''; //tg代理配置认证参数
//Telegram api自建的反向代理地址(不懂可忽略,telegram机器人通知推送功能中非必填),默认tg官方api(环境变量名:TG_API_HOST)
let TG_API_HOST = 'api.telegram.org';
// =======================================钉钉机器人通知设置区域===========================================
//此处填你钉钉 bot 的webhook，例如：5a544165465465645d0f31dca676e7bd07415asdasd
//(环境变量名 DD_BOT_TOKEN)
let DD_BOT_TOKEN = '';
//密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串
let DD_BOT_SECRET = '';

// =======================================企业微信机器人通知设置区域===========================================
//此处填你企业微信机器人的 webhook(详见文档 https://work.weixin.qq.com/api/doc/90000/90136/91770)，例如：693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa
//(环境变量名 QYWX_KEY)
let QYWX_KEY = '';

// =======================================企业微信应用消息通知设置区域===========================================
/*
 此处填你企业微信应用消息的值(详见文档 https://work.weixin.qq.com/api/doc/90000/90135/90236)
 环境变量名 QYWX_AM依次填入 corpid,corpsecret,touser(注:多个成员ID使用|隔开),agentid,消息类型(选填,不填默认文本消息类型)
 注意用,号隔开(英文输入法的逗号)，例如：wwcff56746d9adwers,B-791548lnzXBE6_BWfxdf3kSTMJr9vFEPKAbh6WERQ,mingcheng,1000001,2COXgjH2UIfERF2zxrtUOKgQ9XklUqMdGSWLBoW_lSDAdafat
 可选推送消息类型(推荐使用图文消息（mpnews）):
 - 文本卡片消息: 0 (数字零)
 - 文本消息: 1 (数字一)
 - 图文消息（mpnews）: 素材库图片id, 可查看此教程(http://note.youdao.com/s/HMiudGkb)或者(https://note.youdao.com/ynoteshare1/index.html?id=1a0c8aff284ad28cbd011b29b3ad0191&type=note)
 */
let QYWX_AM = '';

// =======================================iGot聚合推送通知设置区域===========================================
//此处填您iGot的信息(推送key，例如：https://push.hellyw.com/XXXXXXXX)
let IGOT_PUSH_KEY = '';

// =======================================push+设置区域=======================================
//官方文档：http://www.pushplus.plus/
//PUSH_PLUS_TOKEN：微信扫码登录后一对一推送或一对多推送下面的token(您的Token)，不提供PUSH_PLUS_USER则默认为一对一推送
//PUSH_PLUS_USER： 一对多推送的“群组编码”（一对多推送下面->您的群组(如无则新建)->群组编码，如果您是创建群组人。也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送）
let PUSH_PLUS_TOKEN = '';
let PUSH_PLUS_USER = '';

// =======================================Cool Push设置区域=======================================
//官方文档：https://cp.xuthus.cc/docs
//QQ_SKEY: Cool Push登录授权后推送消息的调用代码Skey
//QQ_MODE: 推送模式详情请登录获取QQ_SKEY后见https://cp.xuthus.cc/feat
let QQ_SKEY = '';
let QQ_MODE = '';

// =======================================智能微秘书设置区域=======================================
//官方文档：http://wechat.aibotk.com/docs/about
//AIBOTK_KEY： 填写智能微秘书个人中心的apikey
//AIBOTK_TYPE：填写发送的目标 room 或 contact, 填其他的不生效
//AIBOTK_NAME: 填写群名或用户昵称，和上面的type类型要对应
let AIBOTK_KEY = '';
let AIBOTK_TYPE = '';
let AIBOTK_NAME = '';

// =======================================飞书机器人设置区域=======================================
//官方文档：https://www.feishu.cn/hc/zh-CN/articles/360024984973
//FSKEY 飞书机器人的 FSKEY
let FSKEY = '';


//==========================读取配置=========================

async function init() {
  await Promise.all([
    db.get("wxpush_uid").then((data) => { if (data) WXPUSH_UID = data }),
    db.get("wxpush_token").then((data) => { if (data) WXPUSH_TOKEN = data }),

    db.get("gotify_url").then((data) => { if (data) GOTIFY_URL = data }),
    db.get("gotify_token").then((data) => { if (data) GOTIFY_TOKEN = data }),

    db.get("gocq_url").then((data) => { if (data) GOBOT_URL = data }),
    db.get("gocq_token").then((data) => { if (data) GOBOT_TOKEN = data }),
    db.get("gocq_id").then((data) => { if (data) GOBOT_QQ = data }),

    db.get("sckey").then((data) => { if (data) SCKEY = data }),

    db.get("pushdeer_url").then((data) => { if (data) PUSHDEER_KEY = data }),
    db.get("pushdeer_key").then((data) => { if (data) PUSHDEER_URL = data }),

    db.get("chat_url").then((data) => { if (data) CHAT_URL = data }),
    db.get("chat_token").then((data) => { if (data) CHAT_TOKEN = data }),

    db.get("bark_url").then((data) => { if (data) BARK_PUSH = data }),
    db.get("bark_icon").then((data) => { if (data) BARK_SOUND = data }),
    db.get("bark_group").then((data) => { if (data) BARK_GROUP = data }),

    db.get("tgbot_token").then((data) => { if (data) TG_BOT_TOKEN = data }),
    db.get("tgbot_id").then((data) => { if (data) TG_USER_ID = data }),
    db.get("tgbot_proxyport").then((data) => { if (data) TG_PROXY_HOST = data }),
    db.get("tgbot_proxyport").then((data) => { if (data) TG_PROXY_PORT = data }),
    db.get("tgbot_proxyauth").then((data) => { if (data) TG_PROXY_AUTH = data }),
    db.get("tgbot_apihost").then((data) => { if (data) TG_API_HOST = data }),

    db.get("ddbot_token").then((data) => { if (data) DD_BOT_TOKEN = data }),
    db.get("ddbot_secret").then((data) => { if (data) DD_BOT_SECRET = data }),

    db.get("qywxbot_key").then((data) => { if (data) QYWX_KEY = data }),
    db.get("qywxapp_am").then((data) => { if (data) QYWX_AM = data }),

    db.get("igot_key").then((data) => { if (data) IGOT_PUSH_KEY = data }),
    db.get("pushplus_token").then((data) => { if (data) PUSH_PLUS_TOKEN = data }),
    db.get("qywxapp_am").then((data) => { if (data) PUSH_PLUS_USER = data }),

    db.get("coolpush_skey").then((data) => { if (data) QQ_SKEY = data }),
    db.get("coolpush_mode").then((data) => { if (data) QQ_MODE = data }),

    db.get("aibotk_key").then((data) => { if (data) AIBOTK_KEY = data })
  ])
}


/**
 * sendNotify 推送通知功能
 * @param text 通知头
 * @param desp 通知体
 * @param params 某些推送通知方式点击弹窗可跳转, 例：{ url: 'https://abc.com' }
 * @param author 作者仓库等信息  例：`本通知 By：https://github.com/whyour/qinglong`
 * @returns {Promise<unknown>}
 */
async function sendNotify(
  text,
  desp = "",
  params = {},
  author = '\n\n-本通知 By：sillyPlus',
  selector
) {

  //提供6种通知
  desp += author; //增加作者信息，防止被贩卖等
  await init();
  if (!selector?.length)
    selector = SELECTOR
  else
    //   console.log("通知以下渠道：" + selector)
    //console.log([WXPUSH_UID,WXPUSH_TOKEN,GOTIFY_URL, GOTIFY_TOKEN, GOTIFY_PRIORITY, GOBOT_URL, GOBOT_TOKEN, GOBOT_QQ, SCKEY, PUSHDEER_KEY, PUSHDEER_URL, CHAT_URL, CHAT_TOKEN, BARK_PUSH, BARK_ICON, BARK_SOUND, BARK_GROUP, TG_BOT_TOKEN, TG_USER_ID, TG_PROXY_HOST, TG_PROXY_PORT, TG_PROXY_AUTH, TG_API_HOST, DD_BOT_TOKEN, DD_BOT_SECRET, QYWX_KEY, QYWX_AM, IGOT_PUSH_KEY, PUSH_PLUS_TOKEN, PUSH_PLUS_USER, QQ_SKEY, QQ_MODE, AIBOTK_KEY, AIBOTK_TYPE, AIBOTK_NAME, FSKEY])
    console.log([text, desp, params, author, selector].join("\n"))
  text = text.match(/.*?(?=\s?-)/g) ? text.match(/.*?(?=\s?-)/g)[0] : text;
  let funcs = []
  if (selector.includes("wxpush"))
    funcs.push(wxpushNotify(text, desp))
  if (selector.includes("tgbot"))
    funcs.push(tgBotNotify(text, desp))
  if (selector.includes("ddbot"))
    funcs.push(ddBotNotify(text, desp))
  if ((selector.includes("qywxbot")))
    funcs.push(qywxBotNotify(text, desp))
  if (selector.includes("qywxapp"))
    funcs.push(qywxamNotify(text, desp))
  if (selector.includes("weserver"))
    funcs.push(serverNotify(text, desp))
  if ((selector.includes("pushplus")))
    funcs.push(pushPlusNotify(text, desp))
  if (selector.includes("gocqhttp"))
    funcs.push(gobotNotify(text, desp))
  if (selector.includes("pushdeer"))
    funcs.push(PushDeerNotify(text, desp))
  if ((selector.includes("gotify")))
    funcs.push(gotifyNotify(text, desp))
  if (selector.includes("synologychat"))
    funcs.push(ChatNotify(text, desp))
  if (selector.includes("bark"))
    funcs.push(BarkNotify(text, desp, params))
  if ((selector.includes("igot")))
    funcs.push(iGotNotify(text, desp, params))
  // if(selector.includes("coolpush"))
  //   funcs.push(coo(text, desp))
  if (selector.includes("aibotk"))
    funcs.push(aibotkNotify(text, desp))
  if ((selector.includes("fsbot")))
    funcs.push(fsBotNotify(text, desp))
  await Promise.all(funcs)
  // await Promise.all([
  //   serverNotify(text, desp), //微信server酱
  //   pushPlusNotify(text, desp), //pushplus(推送加)
  // ]);
  // //由于上述两种微信通知需点击进去才能查看到详情，故text(标题内容)携带了账号序号以及昵称信息，方便不点击也可知道是哪个京东哪个活动
  // await Promise.all([
  //   BarkNotify(text, desp, params), //iOS Bark APP
  //   tgBotNotify(text, desp), //telegram 机器人
  //   ddBotNotify(text, desp), //钉钉机器人
  //   qywxBotNotify(text, desp), //企业微信机器人
  //   qywxamNotify(text, desp), //企业微信应用消息推送
  //   iGotNotify(text, desp, params), //iGot
  //   gobotNotify(text, desp), //go-cqhttp
  //   gotifyNotify(text, desp), //gotify
  //   ChatNotify(text, desp), //synolog chat
  //   PushDeerNotify(text, desp), //PushDeer
  //   aibotkNotify(text, desp), //智能微秘书
  //   fsBotNotify(text, desp), //飞书机器人
  // ]);
}



function querystring(params) {
  return Object.keys(params).map(key => `${key}=${encodeURIComponent(JSON.stringify(params[key]))}`).join("&");
}
function get(options, recall = () => { }) {
  const url = options.url
  options["method"] = "GET"
  fetch(options.url, options)
    .then((resp) => {
      resp.text().then((data) => {
        let h = {}
        resp.headers.forEach((value, name) => h[name] = value);
        const res = {
          // body: ReadableStream,
          // bodyUsed: true,
          headers: h,
          // ok: false, // Response is not ok
          // redirected: false,
          status: resp.status,// HTTP status is 404.
          statusText: resp.statusText,// Request not found
          // type: "cors",
          // url: "https://api.github.com/users/chrissycoyier/repos",
        }
        err = resp.ok ? "" : resp.statusText;
        recall(err, res, data)
      })
    })
    .catch((e) => console.log("get error:" + e))
}
function post(options, recall = () => { }) {
  const url = options.url
  options["method"] = "POST"
  if (options.json && !options.body)
    options.body = options.json
  if (typeof (options.body) == "object")
    options.body = JSON.stringify(options.body)
  console.log(JSON.stringify(options))
  fetch(options.url, options)
    .then((resp) => {
      resp.text().then((data) => {
        let h = {}
        //console.log("data:"+data)
        resp.headers.forEach((value, name) => h[name] = value);
        const res = {
          // body: ReadableStream,
          // bodyUsed: true,
          headers: h,
          // ok: false, // Response is not ok
          // redirected: false,
          status: resp.status,// HTTP status is 404.
          statusText: resp.statusText,// Request not found
          // type: "cors",
          // url: "https://api.github.com/users/chrissycoyier/repos",
        }
        err = resp.ok ? "" : resp.statusText;
        recall(err, res, data)
      })
    })
    .catch((e) => console.log("post error:" + e))
}
function logErr(e, resp) {
  resp ? console.log(e) : console.log(e + ":" + JSON.stringify(resp));
}

function wxpushNotify(text, desp) {
  return new Promise((resolve) => {
    if (WXPUSH_UID && WXPUSH_TOKEN) {
      const options = {
        url: `https://wxpusher.zjiecode.com/api/send/message`,
        body: {
          "appToken": WXPUSH_TOKEN,
          "content": desp,
          "summary": text,
          "contentType": 1,
          "uids": [
            WXPUSH_UID
          ],
        },
        headers: {
          'Content-Type': "application/json",
        },
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('wxpush发送通知调用API失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.success) {
              console.log('wxpush发送通知消息成功🎉\n');
            } else {
              console.log(`${data.msg}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve();
        }
      });
    } else {
      resolve();
    }
  });
}

function gotifyNotify(text, desp) {
  return new Promise((resolve) => {
    if (GOTIFY_URL && GOTIFY_TOKEN) {
      const options = {
        url: `${GOTIFY_URL}/message?token=${GOTIFY_TOKEN}`,
        body: `title=${encodeURIComponent(text)}&message=${encodeURIComponent(
          desp,
        )}&priority=${GOTIFY_PRIORITY}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('gotify发送通知调用API失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.id) {
              console.log('gotify发送通知消息成功🎉\n');
            } else {
              console.log(`${data.message}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve();
        }
      });
    } else {
      resolve();
    }
  });
}

function gobotNotify(text, desp) {
  return new Promise((resolve) => {
    if (GOBOT_URL) {
      const options = {
        url: `${GOBOT_URL}/send_msg?access_token=${GOBOT_TOKEN}&${GOBOT_QQ}`,
        body: {
          message: `${text}\n${desp}`,
          //"message_type": "private",
          "user_id": GOBOT_QQ,
        },
        headers: {
          'Content-Type': 'application/json',
        },
        timeout,
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('发送go-cqhttp通知调用API失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.retcode === 0) {
              console.log('go-cqhttp发送通知消息成功🎉\n');
            } else if (data.retcode === 100) {
              console.log(`go-cqhttp发送通知消息异常: ${data.errmsg}\n`);
            } else {
              console.log(`go-cqhttp发送通知消息异常\n${JSON.stringify(data)}`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function serverNotify(text, desp) {
  return new Promise((resolve) => {
    if (SCKEY) {
      //微信server酱推送通知一个\n不会换行，需要两个\n才能换行，故做此替换
      desp = desp.replace(/[\n\r]/g, '\n\n');
      const options = {
        url: SCKEY.includes('SCT')
          ? `https://sctapi.ftqq.com/${SCKEY}.send`
          : `https://sc.ftqq.com/${SCKEY}.send`,
        body: `text=${text}&desp=${desp}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout,
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('发送通知调用API失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            //server酱和Server酱·Turbo版的返回json格式不太一样
            if (data.errno === 0 || data.data.errno === 0) {
              console.log('server酱发送通知消息成功🎉\n');
            } else if (data.errno === 1024) {
              // 一分钟内发送相同的内容会触发
              console.log(`server酱发送通知消息异常: ${data.errmsg}\n`);
            } else {
              console.log(`server酱发送通知消息异常\n${JSON.stringify(data)}`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function PushDeerNotify(text, desp) {
  return new Promise((resolve) => {
    if (PUSHDEER_KEY) {
      // PushDeer 建议对消息内容进行 urlencode
      desp = encodeURI(desp);
      const options = {
        url: PUSHDEER_URL || `https://api2.pushdeer.com/message/push`,
        body: `pushkey=${PUSHDEER_KEY}&text=${text}&desp=${desp}&type=markdown`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout,
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('发送通知调用API失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            // 通过返回的result的长度来判断是否成功
            if (
              data.content.result.length !== undefined &&
              data.content.result.length > 0
            ) {
              console.log('PushDeer发送通知消息成功🎉\n');
            } else {
              console.log(`PushDeer发送通知消息异常\n${JSON.stringify(data)}`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function ChatNotify(text, desp) {
  return new Promise((resolve) => {
    if (CHAT_URL && CHAT_TOKEN) {
      // 对消息内容进行 urlencode
      desp = encodeURI(desp);
      const options = {
        url: `${CHAT_URL}${CHAT_TOKEN}`,
        body: `payload={"text":"${text}\n${desp}"}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('发送通知调用API失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.success) {
              console.log('Chat发送通知消息成功🎉\n');
            } else {
              console.log(`Chat发送通知消息异常\n${JSON.stringify(data)}`);
            }
          }
        } catch (e) {
          logErr(e);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function BarkNotify(text, desp, params) {
  return new Promise((resolve) => {
    if (BARK_PUSH) {
      const options = {
        url: `${BARK_PUSH}/${encodeURIComponent(text)}/${encodeURIComponent(desp)}?icon=${BARK_ICON}?sound=${BARK_SOUND}&group=${BARK_GROUP}&${querystring(params)}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout,
      };
      get(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('Bark APP发送通知调用API失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.code === 200) {
              console.log('Bark APP发送通知消息成功🎉\n');
            } else {
              console.log(`${data.message}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve();
        }
      });
    } else {
      resolve();
    }
  });
}

function tgBotNotify(text, desp) {
  return new Promise((resolve) => {
    if (TG_BOT_TOKEN && TG_USER_ID) {
      const options = {
        url: `https://${TG_API_HOST}/bot${TG_BOT_TOKEN}/sendMessage`,
        json: {
          chat_id: `${TG_USER_ID}`,
          text: `${text}\n\n${desp}`,
          disable_web_page_preview: true,
        },
        headers: {
          'Content-Type': 'application/json',
        },
        timeout,
      };
      if (TG_PROXY_HOST && TG_PROXY_PORT) {
        const tunnel = require('tunnel');
        const agent = {
          https: tunnel.httpsOverHttp({
            proxy: {
              host: TG_PROXY_HOST,
              port: TG_PROXY_PORT * 1,
              proxyAuth: TG_PROXY_AUTH,
            },
          }),
        };
        Object.assign(options, { agent });
      }
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('telegram发送通知消息失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.ok) {
              console.log('Telegram发送通知消息成功🎉。\n');
            } else if (data.error_code === 400) {
              console.log(
                '请主动给bot发送一条消息并检查接收用户ID是否正确。\n',
              );
            } else if (data.error_code === 401) {
              console.log('Telegram bot token 填写错误。\n');
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}
function ddBotNotify(text, desp) {
  return new Promise((resolve) => {
    const options = {
      url: `https://oapi.dingtalk.com/robot/send?access_token=${DD_BOT_TOKEN}`,
      json: {
        msgtype: 'text',
        text: {
          content: `${text}\n\n${desp}`,
        },
      },
      headers: {
        'Content-Type': 'application/json',
      },
      timeout,
    };
    if (DD_BOT_TOKEN && DD_BOT_SECRET) {
      const crypto = require('crypto');
      const dateNow = Date.now();
      const hmac = crypto.createHmac('sha256', DD_BOT_SECRET);
      hmac.update(`${dateNow}\n${DD_BOT_SECRET}`);
      const result = encodeURIComponent(hmac.digest('base64'));
      options.url = `${options.url}&timestamp=${dateNow}&sign=${result}`;
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('钉钉发送通知消息失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.errcode === 0) {
              console.log('钉钉发送通知消息成功🎉。\n');
            } else {
              console.log(`${data.errmsg}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else if (DD_BOT_TOKEN) {
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('钉钉发送通知消息失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.errcode === 0) {
              console.log('钉钉发送通知消息完成。\n');
            } else {
              console.log(`${data.errmsg}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function qywxBotNotify(text, desp) {
  return new Promise((resolve) => {
    const options = {
      url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${QYWX_KEY}`,
      json: {
        msgtype: 'text',
        text: {
          content: `${text}\n\n${desp}`,
        },
      },
      headers: {
        'Content-Type': 'application/json',
      },
      timeout,
    };
    if (QYWX_KEY) {
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('企业微信发送通知消息失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.errcode === 0) {
              console.log('企业微信发送通知消息成功🎉。\n');
            } else {
              console.log(`${data.errmsg}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function ChangeUserId(desp) {
  const QYWX_AM_AY = QYWX_AM.split(',');
  if (QYWX_AM_AY[2]) {
    const userIdTmp = QYWX_AM_AY[2].split('|');
    let userId = '';
    for (let i = 0; i < userIdTmp.length; i++) {
      const count = '账号' + (i + 1);
      const count2 = '签到号 ' + (i + 1);
      if (desp.match(count2)) {
        userId = userIdTmp[i];
      }
    }
    if (!userId) userId = QYWX_AM_AY[2];
    return userId;
  } else {
    return '@all';
  }
}

function qywxamNotify(text, desp) {
  return new Promise((resolve) => {
    if (QYWX_AM) {
      const QYWX_AM_AY = QYWX_AM.split(',');
      const options_accesstoken = {
        url: `https://qyapi.weixin.qq.com/cgi-bin/gettoken`,
        json: {
          corpid: `${QYWX_AM_AY[0]}`,
          corpsecret: `${QYWX_AM_AY[1]}`,
        },
        headers: {
          'Content-Type': 'application/json',
        },
        timeout,
      };
      post(options_accesstoken, (err, resp, data) => {
        let html = desp.replace(/\n/g, '<br/>');
        let json = JSON.parse(data);
        let accesstoken = json.access_token;
        let options;

        switch (QYWX_AM_AY[4]) {
          case '0':
            options = {
              msgtype: 'textcard',
              textcard: {
                title: `${text}`,
                description: `${desp}`,
                url: 'https://github.com/whyour/qinglong',
                btntxt: '更多',
              },
            };
            break;

          case '1':
            options = {
              msgtype: 'text',
              text: {
                content: `${text}\n\n${desp}`,
              },
            };
            break;

          default:
            options = {
              msgtype: 'mpnews',
              mpnews: {
                articles: [
                  {
                    title: `${text}`,
                    thumb_media_id: `${QYWX_AM_AY[4]}`,
                    author: `智能助手`,
                    content_source_url: ``,
                    content: `${html}`,
                    digest: `${desp}`,
                  },
                ],
              },
            };
        }
        if (!QYWX_AM_AY[4]) {
          //如不提供第四个参数,则默认进行文本消息类型推送
          options = {
            msgtype: 'text',
            text: {
              content: `${text}\n\n${desp}`,
            },
          };
        }
        options = {
          url: `https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${accesstoken}`,
          json: {
            touser: `${ChangeUserId(desp)}`,
            agentid: `${QYWX_AM_AY[3]}`,
            safe: '0',
            ...options,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        };

        post(options, (err, resp, data) => {
          try {
            if (err) {
              console.log(
                '成员ID:' +
                ChangeUserId(desp) +
                '企业微信应用消息发送通知消息失败！！\n',
              );
              console.log(err);
            } else {
              data = JSON.parse(data);
              if (data.errcode === 0) {
                console.log(
                  '成员ID:' +
                  ChangeUserId(desp) +
                  '企业微信应用消息发送通知消息成功🎉。\n',
                );
              } else {
                console.log(`${data.errmsg}\n`);
              }
            }
          } catch (e) {
            logErr(e, resp);
          } finally {
            resolve(data);
          }
        });
      });
    } else {
      resolve();
    }
  });
}

function iGotNotify(text, desp, params = {}) {
  return new Promise((resolve) => {
    if (IGOT_PUSH_KEY) {
      // 校验传入的IGOT_PUSH_KEY是否有效
      const IGOT_PUSH_KEY_REGX = new RegExp('^[a-zA-Z0-9]{24}$');
      if (!IGOT_PUSH_KEY_REGX.test(IGOT_PUSH_KEY)) {
        console.log('您所提供的IGOT_PUSH_KEY无效\n');
        resolve();
        return;
      }
      const options = {
        url: `https://push.hellyw.com/${IGOT_PUSH_KEY.toLowerCase()}`,
        body: `title=${text}&content=${desp}&${querystring(params)}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout,
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('发送通知调用API失败！！\n');
            console.log(err);
          } else {
            if (typeof data === 'string') data = JSON.parse(data);
            if (data.ret === 0) {
              console.log('iGot发送通知消息成功🎉\n');
            } else {
              console.log(`iGot发送通知消息失败：${data.errMsg}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function pushPlusNotify(text, desp) {
  return new Promise((resolve) => {
    if (PUSH_PLUS_TOKEN) {
      desp = desp.replace(/[\n\r]/g, '<br>'); // 默认为html, 不支持plaintext
      const body = {
        token: `${PUSH_PLUS_TOKEN}`,
        title: `${text}`,
        content: `${desp}`,
        topic: `${PUSH_PLUS_USER}`,
      };
      const options = {
        url: `https://www.pushplus.plus/send`,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': ' application/json',
        },
        timeout,
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log(
              `push+发送${PUSH_PLUS_USER ? '一对多' : '一对一'
              }通知消息失败！！\n`,
            );
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.code === 200) {
              console.log(
                `push+发送${PUSH_PLUS_USER ? '一对多' : '一对一'
                }通知消息完成。\n`,
              );
            } else {
              console.log(
                `push+发送${PUSH_PLUS_USER ? '一对多' : '一对一'
                }通知消息失败：${data.msg}\n`,
              );
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function aibotkNotify(text, desp) {
  return new Promise((resolve) => {
    if (AIBOTK_KEY && AIBOTK_TYPE && AIBOTK_NAME) {
      let json = {};
      let url = '';
      switch (AIBOTK_TYPE) {
        case 'room':
          url = 'https://api-bot.aibotk.com/openapi/v1/chat/room';
          json = {
            apiKey: `${AIBOTK_KEY}`,
            roomName: `${AIBOTK_NAME}`,
            message: {
              type: 1,
              content: `【青龙快讯】\n\n${text}\n${desp}`,
            },
          };
          break;
        case 'contact':
          url = 'https://api-bot.aibotk.com/openapi/v1/chat/contact';
          json = {
            apiKey: `${AIBOTK_KEY}`,
            name: `${AIBOTK_NAME}`,
            message: {
              type: 1,
              content: `【青龙快讯】\n\n${text}\n${desp}`,
            },
          };
          break;
      }
      const options = {
        url: url,
        json,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout,
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('智能微秘书发送通知消息失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.code === 0) {
              console.log('智能微秘书发送通知消息成功🎉。\n');
            } else {
              console.log(`${data.error}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

function fsBotNotify(text, desp) {
  return new Promise((resolve) => {
    if (FSKEY) {
      const options = {
        url: `https://open.feishu.cn/open-apis/bot/v2/hook/${FSKEY}`,
        json: { msg_type: 'text', content: { text: `${text}\n\n${desp}` } },
        headers: {
          'Content-Type': 'application/json',
        },
        timeout,
      };
      post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log('发送通知调用API失败！！\n');
            console.log(err);
          } else {
            data = JSON.parse(data);
            if (data.StatusCode === 0) {
              console.log('飞书发送通知消息成功🎉\n');
            } else {
              console.log(`${data.msg}\n`);
            }
          }
        } catch (e) {
          logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    } else {
      resolve();
    }
  });
}

module.exports = {
  sendNotify,
  BARK_PUSH,
};
