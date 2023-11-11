/**
 * @author https://t.me/sillyGirl_Plugin
 * @version v1.0.1
 * @create_at 2022-09-19 15:06:22
 * @description 京东登陆插件node版，已对接narkPro与rabbitPro，使用方式见注释
 * @title 京东登陆
 * @rule raw ^(短信)?登(陆|录)$
 * @rule raw ^扫码登(陆|录)$
 * @rule raw ^登(陆|录)检(测|查)$
 * @rule raw [\S ]*pin=[^;]+; ?wskey=[^;]+;[\S ]*
 * @rule raw [\S ]*pt_key=[^;]+; ?pt_pin=[^;]+;[\S ]*
 * @priority 9
 * @public false
 * @disable false
*/

/********
 * 打开进入傻+执行文件同级目录下的“plugins”文件夹（没有则自行创建)
 * 创建文件夹“self_modules”与另一任意名文件夹(比如jd)
 * 在jd文件夹放入本文件，文件夹“self_modules”内放入qinglong.js与something.js文件
 * 在傻+后台找到本插件(京东登陆)打开，点击右上角“表单”按钮进行配置
 * 本插件类似网页登陆，全程不经手ck，ck分发及维护由narkPro与rabbitPro负责
 * 若选择通知，需在sendNotify模块填写对应通知配置
 * *** */

const Form = () => { }

Form([
    {
        title: "narkPro地址",
        key: "jd_cookie.narkPro_addr",
        tooltip: "示例：http://127.0.0.1:8080"
    },
    {
        title: "rabbitPro配置",
        valueType: "group",
        columns: [
            {
                title: "rabbitPro地址",
                key: "jd_cookie.rabbitPro_addr",
                tooltip: "示例：http://127.0.0.1:8080"
            },
            {
                title: "rabbitPro上车容器",
                key: "jd_cookie.rabbitPro_container",
                tooltip: "rabbitPro所对接的容器序号，例：1"
            }
        ]
    },
    {
        title: "优先登陆方式",
        tooltip: "优先级高的登陆方式调用失败时，自动切换至下一级",
        valueType: "group",
        columns: [
            {
                title: "短信优先级",
                dataIndex: "jd_cookie.login_smsPriority",
                valueType: "select",
                width: "xs",
                valueEnum: {
                    narkPro: {
                        text: "narkPro",
                    },
                    rabbitPro: {
                        text: "rabbitPro",
                    }
                }
            },
            {
                title: "扫码优先级",
                dataIndex: "jd_cookie.login_qrPriority",
                valueType: "select",
                width: "xs",
                valueEnum: {
                    narkPro: {
                        text: "narkPro",
                    },
                    rabbitPro: {
                        text: "rabbitPro",
                    }
                }
            }
        ]
    },
    {
        title: "登陆限制",
        valueType: "group",
        columns: [
            {
                title: "群白名单",
                key: "jd_cookie.login_groupWhiteList",
                tooltip: "允许上车的群聊白名单id,非白名单群禁止上车,多个群号使用&隔开"
            },
            {
                title: "客户黑名单",
                key: "jd_cookie.login_userBlackList",
                tooltip: "拉黑客户的id,拉黑的账号禁止登陆，多个账号使用&隔开"
            },
            {

                //title: "禁止重复登陆",
                valueType: "group",
                columns: [{
                    title: "禁止重复登陆",
                    valueType: "switch",
                    key: "jd_cookie.login_forbidRe",
                    tooltip: "是否禁止用户在账号未失效的情况下重复登陆（默认不禁止）",
                },
                {
                    title: "失效检查容器",
                    key: "jd_cookie.login_checkContainer",
                    tooltip: "若禁止重复登陆，则填入傻+所对接的聚合容器序号，用于检查确认用户的账号是否已经失效，例：1,可不填"
                }]
            }
        ]
    },
    {
        title: "提交CK容器",
        key: "jd_cookie.submitContainer",
        tooltip: "客户直接发送CK时将其上传至的容器，填写傻+对接容器序号，例：1,可不填"
    },
    {
        title: "通知",
        tooltip: "待完成",
        valueType: "group",
        columns: [
            {
                title: "渠道",
                dataIndex: "jd_cookie.login_notify",
                valueType: "checkbox",
                width: "150px",
                tooltip: "已选选项需在sendNotify模块填写配置",
                valueEnum: {
                    tgbot: { text: "Telegram机器人     " },
                    ddbot: { text: "钉钉机器人   " },
                    qywxbot: { text: "企业微信机器人" },
                    qywxapp: { text: "企业微信应用" },
                    weserver: { text: "微信server酱 " },
                    pushplus: { text: "微信pushplus " },
                    gocqhttp: { text: "go-cqhttp    " },
                    pushdeer: { text: "PushDeer     " },
                    gotify: { text: "gotify       " },
                    synologychat: { text: "Synology Chat" },
                    bark: { text: "Bark App     " },
                    igot: { text: "iGot聚合推送  " },
                    coolpush: { text: "coolpush      " },
                    aibotk: { text: "智能微秘书    " },
                    fsbot: { text: "飞书机器人    " }
                }
            },
            // {
            //     title: "傻+通知-待完成",
            //     valueType: "group",
            //     columns: [
            //         {
            //             title: "通知管理员",
            //             dataIndex: "jd_cookie.login_notifyMasters",
            //             valueType: "switch",
            //             tooltip: "客户登陆通知",
            //             width: "lg"
            //         },
            //         {
            //             title: "渠道",
            //             dataIndex: "jd_cookie.login_notifyPlatform",
            //             valueType: "select",
            //             tooltip: "需傻+已对接该机器人",
            //             width: "xs",
            //             valueEnum: {
            //                 qq: {
            //                     text: "QQ",
            //                 },
            //                 tgbot: {
            //                     text: "Telegram",
            //                 },
            //                 wx: {
            //                     text: "微信",
            //                 }
            //             }
            //         },
            //         {
            //             title: "账号ID",
            //             tooltip: "需推送至的账号",
            //             dataIndex: "jd_cookie.login_notifyID"
            //         }]
            // }
        ]
    }
])






const { sender: s, Bucket, sleep, utils: { buildCQTag, image, video }, } = require("sillygirl");

const jddb = new Bucket("jd_cookie");

var narkPro = "";
var rabbitPro = "";
var container_id = "";
var groupWhiteList = "";
var userBlackList = "";
var forbidReLogin = "";
var checkContainer = "";
var submitContainer = "";
var selector = [];
//var admin, platform, userId, userName, chatId, chatName, messageId, content, botId 

var pins = [] //用户已绑定的pin


const $ = Env(s);
const ql = require("../self_modules/qinglong.js");
const { JD, CQ_Image, notifyMasters, getBind } = require("../self_modules/something.js");
const timeout = 3 * 60 * 1000;	//输入等待时长
const VerifyTimes = 3;	//验证重试次数

(async () => {

    await InitBucket();
    let env = { name: "", value: "", remarks: "" };
    let pin = "";
    const qldb = new Bucket("qinglong")
    const clients = await qldb.keys()
    pins = await getBind($.platform, $.userId)
    userBlackList = userBlackList ? userBlackList.toString().split("&") : [];
    groupWhiteList = groupWhiteList ? groupWhiteList.toString().split("&") : [];
    if (userBlackList && userBlackList.find(id => id == $.userId)) {
        await $.reply("您已被拉黑，请联系管理员")//不需要通知请注释本行 
        return
    }
    else if (await $.chatId && !groupWhiteList.find(id => id == $.chatId)) {
        await $.reply("本群禁止上车")//不需要通知请注释本行
        return
    }
    // if(!$.admin){
    // 	await $.reply("维护中...")
    // 	return
    // }
    if ($.content.match(/^(短信)?登(陆|录)$/)) {
        //检查绑定账号是否失效
        // if (forbidReLogin && pins.length) {
        //     if (! await NeedLogin(pins, await CreatQl(clients[checkContainer]))) {
        //         await $.reply("您的账号尚未失效，无需重新登陆\n若需添加新账号，请联系管理员或者使用短信登陆")
        //         return
        //     }
        // }
        await $.reply("京东呆瓜助手为您服务，请输入手机号码(可回复q退出):")
        let inp = await s.listen({ handle, timeout })
        let Tel = ""
        if (!inp) {
            await $.reply("输入超时，请重新登陆")
            return
        }
        else Tel = await inp.getContent()
        if (Tel == "q") {
            await $.reply("已退出")
            return
        }
        else if (Tel.length != 11) {
            await $.reply("手机号码错误，请重新登陆")
            return
        }
        let tipid = await $.reply("请稍候...")
        let loginFirst = await jddb.get("login_smsPriority")
        if (loginFirst == "narkPro") {
            pin = await NarkProSms(Tel)
            if (!pin)
                pin = await RabbitProSms(Tel)
            if (!pin)
                await $.reply("短信登陆暂时不可用，您可以尝试'扫码登陆'登陆或者手动抓取ck")
        }
        else if (loginFirst == "rabbitPro") {
            pin = await RabbitProSms(Tel)
            if (!pin)
                pin = await NarkProSms(Tel)
            if (!pin)
                await $.reply("短信登陆暂时不可用，您可以尝试'扫码登陆'登陆或者手动抓取ck")
        }
    }
    // else if ($.admin && $.content == "打开扫码") {
    //     jddb.set("qr_switch", 1)
    //     await $.reply("ok")
    // }
    // else if ($.admin && $.content == "关闭扫码") {
    //     jddb.set("qr_switch", 0)
    //     await $.reply("ok")
    // }
    else if ($.content.match(/^(扫码|口令)登(录|陆)$/)) {
        if (!$.admin && await jddb.get("qr_switch") == 0) {
            await $.reply('维护中...')
        }
        //检查绑定账号是否失效
        if (forbidReLogin && !$.admin && pins.length) {
            if (!await NeedLogin(pins, await CreatQl(clients[checkContainer]))) {
                await $.reply("您的账号尚未失效，无需重新登陆\n若需添加新账号，请联系管理员或者使用短信登陆")
            }
        }
        let tipid = await $.reply("请稍候...")
        let loginFirst = await jddb.get("login_qrPriority")
        if (loginFirst == "narkPro") {
            pin = await NarkProQr()
            if (!pin)
                pin = await RabbitProQr()
            if (!pin)
                $.reply("扫码暂时不可用,您可以发送“呆瓜”获取其他登陆方式或者稍后再试")
        }
        else if (loginFirst == "rabbitPro") {
            pin = await RabbitProQr()
            if (!pin)
                pin = await NarkProQr()
            if (!pin)
                $.reply("扫码暂时不可用,您可以发送“呆瓜”获取其他登陆方式或者稍后再试")
        }
    }
    else if ($.admin && $.content.match(/^登(陆|录)检(测|查)$/)) {
        let message = ""
        let Tel = "138" + Math.floor(Math.random() * 9e8).toString()	//随机手机号
        let data = null
        await $.reply("请稍候...")
        console.log("生成随机手机号码:" + Tel)
        if (await SendSms(Tel, narkPro + "/sms/SendSMS"))
            message += "★narkPro短信：正常\n"
        else
            message += "☆narkPro短信：失败\n"
        if (await SendSms(Tel, nark + "/api/SendSMS"))
            message += "★nark短信：正常\n"
        else
            message += "☆nark短信：失败\n"
        data = await GetQr(narkPro + "/qr/GetQRKey")
        if (data && data.success)
            message += "★narkPro扫码：正常\n"
        else
            message += "☆narkPro扫码：失败\n"
        data = await GetQr(rabbit + "/api/BeanQrCode")
        if (data && data.code == 0)
            message += "★rabbit扫码：正常\n"
        else
            message += "☆rabbit扫码：失败\n"
        message += "\n若提示失败，请查看日志，可能原因包括但不限于未对接、对接失败、面板已挂等"
        await $.reply(message)
    }
    else if ($.content.indexOf("wskey") != -1) {	//提交wskey
        if (isNaN(submitContainer)) {
            s.continue()
            return
        }
        await $.recallMessage($.messageId)
        await sleep(400)
        if (submitContainer < 0) {
            await $.reply("请联系管理员正确设置提交cookie容器！")
            return
        }
        env.name = "JD_WSCK"
        env.value = $.content.match(/pin=[^;]+; ?wskey=[^;]+;/)[0]
        if (SubmitCK(await CreatQl(clients[submitContainer]), env))
            await $.reply("提交成功！")
    }
    else {	//提交ck
        if (isNaN(submitContainer)) {
            s.continue()
            return
        }
        if (submitContainer < 0) {
            await $.reply("请联系管理员正确设置提交cookie容器！")
            return
        }
        env.value = $.content.match(/pt_key=[^;]+; ?pt_pin=[^;]+;/)[0];
        env.name = "JD_COOKIE";
        const jd = new JD(env.value)
        const userdata = await jd.userInfo()
        if (userdata || await jd.isLogin()) {	//检查ck有效性
            await $.recallMessage($.messageId)
            await sleep(400)
            if (SubmitCK(await CreatQl(clients[submitContainer]), env)) {
                await $.reply(userdata?.userInfo?.baseInfo?.nickname + "提交成功！")
            }
        }
        else {
            await $.reply("cookie无效")
        }
    }
    if (pin && pin != true)
        await new Bucket("pin" + $.platform.toUpperCase()).set(pin, $.userId)
})()

/**
 * 
 * @param {string} Tel - 手机号
 * @returns {any} - false:服务异常;true:客户退出、超时、多次验证失败等;string:登陆成功客户的pin
 * @remark 下3同
 */
async function NarkProSms(Tel) {
    if (!narkPro) {
        return false
    }
    if (await SendSms(Tel, narkPro + "/sms/SendSMS")) {
        console.log("narkPro在线")
        let result = await VerifyCode(Tel, narkPro)
        if (result && result != true)
            await $.reply(result + "登陆成功！")
        return result
    }
    else {
        Notify("报告老板，narkPro疑似挂了！")
        return false
    }
}

async function RabbitProSms(Tel) {
    if (!rabbitPro) {
        console.log("未对接rabbitPro！")
        return false
    }
    if (await SendSms(Tel, rabbitPro + "/sms/sendSMS")) {
        console.log("rabbitPro在线")
        let result = await VerifyCode(Tel, rabbitPro)
        if (result && result != true)
            await $.reply(result + "登陆成功！")
        return result
    }
    else {
        Notify("报告老板，rabbitPro疑似挂了！")
        return false
    }
}

async function NarkProQr() {
    if (!narkPro) {
        console.log("未设置narkPro扫码地址")
        return false
    }
    let data = await GetQr(narkPro + "/qr/GetQRKey")
    if (!data || !data.success) {
        let tip = "报告老板,narkPro面板疑似挂了\n"
        tip += data ? JSON.stringify(data) : ""
        NotifyMasters(tip)
        if (data.message)
            await $.reply(data.message)
        return false
    }
    else if (!data.data.key) {
        console.log("未知错误\n" + JSON.stringify(data))
        return false
    }
    //console.log(data.data.key)
    console.log("narkPro在线")
    let loginkey = data.data.key
    let loginurl = "https://qr.m.jd.com/p?k=" + loginkey
    let qrurl = "https://api.pwmqr.com/qrcode/create/?url=" + loginurl
    let tip = "请使用京东app扫码"
    //回复登陆二维码
    await $.reply($.platform == "qq" ? CQ_Image(qrurl) : image(qrurl))
    await $.reply(tip)

    //轮询是否登陆成功
    let limit = 100
    while (limit-- > 0) {
        await sleep(2000)
        let option = {
            url: narkPro + "/qr/CheckQRKey",
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: { "qrkey": loginkey }
        }
        resp = await $.request(option)
        data = JSON.parse(resp.body)
        if (data.success) {	//登陆成功
            let pin = decodeURI(data.data.username) == data.data.username ? encodeURI(data.data.username) : data.data.username	//分析pin是否已经过编码，未编码则进行编码，以防中文pin
            await $.reply(decodeURI(pin) + "登陆成功，账号更新中...\n请等待几分钟后再查询账号信息")
            return pin
        }
        else if (data.message == "请先获取二维码") {	//二维码失效      
            await $.reply("超时")
            return true
        }
        else if (data.message == "二维码已取消授权") {
            await $.reply(data.message)
            return true
        }
    }
    await $.reply("超时")
    return true
}

async function RabbitProQr() {
    if (!rabbitPro) {
        console.log("未设置rabbitPro扫码地址")
        return false
    }
    else if (!container_id) {
        await $.reply("未设置rabbitPro上车服务器！\n")
        return false
    }
    let data = await GetQr(rabbitPro + "/api/GenQrCode")
    if (!data || data.code != 0) {
        let tip = "报告老板,rabbit扫码面板疑似挂了\n"
        tip += data ? JSON.stringify(data) : ""
        Notify(tip)
        if (data.message)
            await $.reply(data.message)
        return false
    }
    else if (!data.QRCodeKey) {
        console.log("未知错误\n" + JSON.stringify(data))
        return false
    }
    console.log("rabbitPro在线")
    let loginkey = data.QRCodeKey
    let loginurl = "https://qr.m.jd.com/p?k=" + loginkey
    let qrurl = "https://api.pwmqr.com/qrcode/create/?url=" + loginurl
    let tip = "请使用京东app扫码"
    //回复登陆二维码
    await $.reply($.platform == "qq" ? CQ_Image(qrurl) : image(qrurl))
    if (data.jcommond)
        s.tip += "\n或者复制本段文字后进入京东APP（需开启京东app读取剪切板权限）:\n\n" + code
    await $.reply(tip)

    //轮询是否登陆成功
    let limit = 100
    while (limit-- > 0) {
        await sleep(2000)
        resp = await $.request({
            url: rabbitPro + "/api/QrCheck",
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: {
                "token": "",
                container_id,
                "QRCodeKey": loginkey
            }
        })
        data = JSON.parse(resp.body)
        console.log(unescape(resp.body.replace(/\\u/g, "%u")))
        if (data.code == 200) {	//登陆成功
            let pin = decodeURI(data.pin) == data.pin ? encodeURI(data.pin) : data.pin
            await $.reply(decodeURI(pin) + "登陆成功，账号更新中...\n请等待几分钟后再查询账号信息")
            return pin
        }
        else if (data.code == 503) {	//扫码后取消登陆
            await $.reply(data.msg)
            return true
        }
        else if (data.code == 502) {	//二维码失效
            await $.reply("超时")
            return true
        }
        //其他code 56:未扫码 57:扫码未确认 503:取消扫码
    }
    await $.reply("超时")
    return true
}

//获取登陆二维码
async function GetQr(addr, token) {
    let option = {
        url: addr,
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: {}
    }
    if (token) {
        option.headers["Authorization"] = "Bearer " + token
        option.body["botApitoken"] = token
    }
    let limit = 3
    while (limit-- > 0) {
        let resp = await $.request(option)
        if (resp.status == 200)
            return JSON.parse(resp.body)
        else {
            console.log(JSON.stringify(resp))
        }
    }
    return null
}

//检查pins中是否存在失效账号
async function NeedLogin(pins, QL) {
    let envs = await QL.getEnvs()
    if (!envs) {
        console.log("获取青龙变量失败")
        return false
    }
    for (let i = 0; i < pins.length; i++) {
        let env = envs.find(env => env.name == "JD_COOKIE" && pins[i] == env.value.match(/(?<=pin=)[^;]+/)[0])
        if (!env) {
            console.log("无" + pins[i])
            return true
        }
        else if (!await (new JD(env.value).isLogin())) {
            console.log(pins[i] + "可能已失效")
            return true
        }
    }
    return false
}


//短信验证
async function VerifyCode(Tel, host, token) {
    let resp = null
    let option = {
        url: host + "/sms/VerifyCode",
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: {
            "Phone": Tel
        }
    }
    if (token) {
        option.headers["Authorization"] = "Bearer " + token
        option.body["botApitoken"] = token
    }
    if (container_id)
        option.body["container_id"] = container_id
    let TryAgain = async function (i, data) {
        if (data.message) {
            if (data.message.indexOf("错误") != -1) {	//验证错误
                if (i == VerifyTimes - 1) {
                    await $.reply("错误次数过多，退出")
                }
                else {	//再次提交
                    await $.reply(data.message)
                    return true
                }
            }
            else if (data.message.indexOf("账号存在风险") != -1) {
                await $.reply("该账号受京东风控，请晚上8点后重试或者使用其他登陆方式")
            }
            else
                await $.reply(data.message)
        }
        else
            await $.reply("未知错误，请联系管理员\n" + JSON.stringify(data))
        return false
    }
    for (let i = 0; i < VerifyTimes; i++) {
        await $.reply("请输入验证码：")
        let inp = await s.listen({ handle, timeout })
        if (!inp) {
            await $.reply("您已超时，请重新登录")
            return true
        }
        else code = await inp.getContent()
        if (code == "q") {
            await $.reply("已退出")
            return true
        }
        if (code.length != 6) {
            await $.reply("验证码错误，请重新输入")
            continue
        }
        option.body["Code"] = code
        resp = await $.request(option)
        if (resp.status != 200) {
            await $.reply("登陆失败:" + resp.status)
            console.log(JSON.stringify(option) + "\n\n" + JSON.stringify(resp))
            return false
        }
        let data = JSON.parse(resp.body)
        if (data.success)	//登陆成功
            return data.pin ?? data.data.username
        //二验
        else if (data.data.status == 555) {
            if (data.data.mode == "USER_ID")
                await $.reply("该账号需验证身份,请输入您的身份证号前2位与后4位:")
            else if (data.data.mode == "HISTORY_DEVICE")
                await $.reply("该账号需验证设备，请在三分钟内前往京东APP>设置>账户安全 新设备登录>确认登录\n\n请在完成如上操作后,回复“已确认”")
            else if (data.data.mode == "DANGEROUS_UP") {
                let info = data.data.message
                let tip = "该账号需进行短信验证，请在三分钟内使用手机" + info.phone + "编辑短信“" + info.uplink_tocontent + "”发送至" + info.uplink_tophone
                tip += "\n请在完成如上操作后,回复“已确认”"
                await $.reply(tip)
            }
            else {
                await $.reply("未知验证，请联系管理员！\n\n" + JSON.stringify(data))
                return true
            }
            for (let j = 0; j < VerifyTimes; j++) {
                inp = await s.listen({ handle, timeout })
                if (!inp) {
                    await $.reply("超时退出")
                    return true
                }
                else code = await inp.getContent()
                if (code == "q") {
                    await $.reply("已退出")
                    return true
                }
                option.url = host + "/VerifyCard"
                option.body["Code"] = code
                resp = await $.request(option)
                data = JSON.parse(resp.body)
                if (data.success)	//登陆成功
                    return data.pin ?? data.data.username
                else if (TryAgain(j, data))
                    continue
                else
                    return true
            }
        }
        else if (TryAgain(i, data))
            continue
        else
            return true
    }
    return true
}

//获取验证码
async function SendSms(Tel, addr, token) {
    let option = {
        url: addr,
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: {
            "Phone": Tel
        }
    }
    if (token) {
        option.headers["Authorization"] = "Bearer " + token
        option.body["botApitoken"] = token
    }
    if (isNaN(container_id)) {
        await $.reply("请联系管理员正确设置rabbitPro上车容器！")
        return false
    }
    else if (container_id)
        option.body["container_id"] = container_id
    let resp = await $.request(option)
    if (resp.status == 200) {
        let data = JSON.parse(resp.body)
        if (data.message)
            await $.reply(data.message)
        return data.success
    }
    return false
}

//上传ck至青龙
async function SubmitCK(QL, ck) {
    let pin = ck.value.match(/(?<=pin=)[^;]+/)
    if (pin == null)
        return false
    else
        pin = pin[0]
    let envs = await QL.getEnvs()
    if (envs == null)
        return false

    let e = envs.find(Ele => Ele.name == ck.name && Ele.value.match(/(?<=pin=)[^;]+/)[0] == pin)	//检查是青龙内是否已存在该ck
    if (!e) {	//添加新ck
        ck.remarks = $.platform + ":" + $.userId
        return await QL.createEnvs([ck])
    }
    else {	//更新ck
        let id = e.id ? e.id : e._id
        let remarks = e.remarks ? e.remarks : $.platform + ":" + $.userId
        return await QL.updateEnv({ id, name: ck.name, value: ck.value, remarks }) && await QL.enableEnvs([id])
    }
}

async function CreatQl(client_id) {
    let QL = new ql(client_id)
    await QL.init()
    return QL
}

async function InitBucket() {
    await Promise.all([
        jddb.get("narkPro_addr").then((data) => narkPro = data),

        jddb.get("rabbitPro_addr").then((data) => rabbitPro = data),
        jddb.get("rabbitPro_container").then((data) => container_id = Number(data) + 1),

        jddb.get("login_groupWhiteList").then((data) => groupWhiteList = data),

        jddb.get("login_userBlackList").then((data) => userBlackList = data),

        jddb.get("login_forbidRe").then((data) => forbidReLogin = data),

        jddb.get("login_checkContainer").then((data) => checkContainer = data - 1),

        jddb.get("submitContainer").then((data) => submitContainer = data - 1),

        jddb.get("login_notify").then((data) => selector = data)
    ])
    // narkPro = await jddb.get("narkPro_addr")

    // rabbitPro = await jddb.get("rabbitPro_addr")
    // container_id = Number(await jddb.get("rabbitPro_container")) + 1

    // //允许上车的群聊白名单id
    // groupWhiteList = await jddb.get("login_groupWhiteList")

    // //客户黑名单，黑名单客户禁止上车
    // userBlackList = await jddb.get("login_userBlackList")

    // //是否禁止用户在账号未失效的情况下重复登陆
    // forbidReLogin = await jddb.get("login_forbidRe")

    // checkContainer = await jddb.get("login_checkContainer") - 1

    // submitContainer = await jddb.get("submitContainer") - 1

    // return { narkPro, rabbitPro, container_id, groupWhiteList, userBlackList, forbidReLogin, checkContainer }
}

const handle = async function (s) {
    if ($.chatId)
        await $.recallMessage($.messageId)
    await sleep(400)
}

function Notify(msg) {
    if (selector && selector.length) {
        const { sendNotify } = require("../sendNotify/main.js");
        sendNotify("傻+ 京东登陆", msg, {}, "", selector);
    }
    NotifyMasters(msg);
}
function NotifyMasters(msg) {
    //待实现
    //if (!$.admin)
    // notifyMasters(msg)
}

function Env(s, title) {
    class sender {
        constructor(s) {
            this.s = s
            this.admin = false;
            this.platform = "";
            this.userId = "";
            this.userName = ""
            this.chatId = "";
            this.chatName = "";
            this.messageId = "";
            this.content = "";
            this.botId = ""
            this.params = [];
            this.replied = [];

            if (title)
                console.log(`【${title}】启动`)
            this.#init()
        }
        async #init() {
            await Promise.all([
                s.isAdmin().then((data) => this.admin = data),
                s.getPlatform().then((data) => this.platform = data),
                s.getUserId().then((data) => this.userId = data),
                s.getUserName().then((data) => this.userName = data),
                s.getChatId().then((data) => this.chatId = data),
                s.getChatName().then((data) => this.chatName = data),
                s.getMessageId().then((data) => this.messageId = data),
                s.getContent().then((data) => this.content = data),
                s.getBotId().then((data) => this.botId = data)
            ])
            // this.admin = await s.isAdmin();
            // this.platform = (await s.getPlatform()).toString();
            // this.userId = (await s.getUserId()).toString();
            // this.userName = (await s.getUserName()).toString();
            // this.chatId = (await s.getChatId()).toString();
            // this.chatName = (await s.getChatName()).toString();
            // this.messageId = (await s.getMessageId()).toString();
            // this.content = (await s.getContent()).toString();
            // this.botId = (await s.getBotId()).toString();
        }
        async recallMessage(messageId) {
            await this.s.doAction({
                type: "delete_message",
                message_id: messageId,
            });
        }
        async reply(msg) {
            const replyid = await this.s.reply(msg);
            this.replied.push({
                platform: this.platform,
                userId: this.userId,
                content: msg,
                messageId: replyid,
                timestamp: new Date().getTime()
            });
            return replyid
        }
        async listen(...params) {
            for (let i = 0; i < params.length; i++) {
                if (typeof (params[i]) == "number")
                    timeout = params[i]
                else if (typeof (params[i]) == "string")
                    rules = params[i]
                else if (typeof (params[i]) == "object")
                    handle = params[i]
            }
            await this.s.listen({ rules, timeout, handle })
        }
        async param(n) {
            let param = ""
            this.s.param(n).then((vn) => param = vn)
            return param
        }
        async request(options) {
            let option, url;
            console.log("请求：\n" + JSON.stringify(options))
            if (typeof (options) == "object") {
                url = options.url
                if (!options.headers["Content-Type"])
                    options.headers["Content-Type"] = "application/json"
                option = {
                    method: options.method ?? "GET",
                    headers: options.headers ?? {},
                    body: options.body ? JSON.stringify(options.body) : undefined
                }
            } else
                url = options
            try {
                let resp = await fetch(url, option)
                let body = await resp.text()
                console.log("响应：\n" + body)
                return { status: resp.status, headers: resp.headers, body }
            } catch (error) {
                console.log(error)
                return { error }
            }
        }
        async destroy() {
            console.log(`【${title}】结束`)
            this.s.destroy()
        }
    }
    return new sender(s)
}
