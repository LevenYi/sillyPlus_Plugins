/*
 * @author https://t.me/sillyGirl_Plugin
 * @module true
 * @create_at 2021-09-09 16:30:33
 * @description 青龙模块
 * @version v1.0.4
 * @public true
 * @title qinglong
*/


module.exports = {
    //认证
    getToken,
    //订阅
    getSubs,
    addSub,
    runSubs,
    stopSubs,
    deleteSubs,
    //环境变量
    getEnvs,
    getEnv,
    addEnvs,
    updateEnv,
    deleteEnvs,
    moveEnvs,
    disableEnvs,
    enableEnvs,
    //配置文件
    getConfig,
    getConfigs,
    updateConfig,
    //日志
    getLogs,
    getLog,
    //定时任务
    getCrons,
    addCron,
    updateCron,
    deleteCrons,
    deleteCrons,
    enableCrons,
    getCronLog,
    pinCrons,
    unpinCrons,
    runCrons,
    stopCrons,
    //脚本
    getScripts,
    getScript,
    addScript,
    updateScript,
    deleteScript,
    runScript,

    //自定义
    QLS: QLS(),
    syncEnvs,
    updateConfigEnvs,
    //拉库相关，兼容新旧版青龙
    getRepos,
    runRepos,
    runRepoComm,
    stopRepos,
    deleteRepos
}


/*********青龙管理************* */
/*
const qldb=Bucket("test")
const keys=qldb.keys()
const filter=["address","client_id","client_secret","disable"]
var QLS=[]
var form=[]
keys.forEach(key=>{
    if(filter.find(kw=>key.indexOf(kw)!=-1)){
        let id=key.split(/\B(?=\d+)/)[1]
        let index=QLS.findIndex(QL=>QL.id==id)
        if(index!=-1)
            QLS[index][key]=qldb.get(key)
        else{
            let obj={id:id}
            obj[key]=qldb.get(key)
            QLS.push(obj)
        }
    }
})

var sample=
    {
        title:"青龙配置",
        valuetype:"group",
        columns:[
            {
                title:"面板地址",
                dataIndex:"test.address",
                tooltip:"面板登陆地址，例：http://127.0.0.1:5700"
            },
            {
                title:"应用ID",
                dataIndex:"test.client_id",
                tooltip:"青龙访问应用id，于系统设置-应用设置内创建应用后可得"
            },
            {
                title:"应用密钥",
                dataIndex:"test.client_secret",
                tooltip:"青龙访问应用密钥，于系统设置-应用设置内创建应用后可得"
            }
        ]
    }

QLS.forEach((QL,i)=>{
    let temp=JSON.parse(JSON.stringify(sample))	//复制
    temp.title="容器"+(i+1)
    for(let j=0;j<temp.columns.length;j++)
        temp.columns[i].dataIndex+=(i+-1).toString()
    form.push(temp)
})
form.push(sample)
*/

//使用样例,仅供参考，可能修改
function Sample() {
    let data = null
    let QL = QLS()[0]
    let host = QL.host
    let client_id = QL.client_id
    let client_secret = QLS.client_secret
    let token = QL.token


    // let token=getToken(host,client_id,client_secret)
    // data=getVersion(host,token)
    // let login=QL_Login(host,"username","passsword")

    // data=getSeqLogClear(host,token)


    // data=getScripts(host,token)[2].children[0]
    // data=getScript(host,token,"KingRan_KR","root.json")
    // data=addScript(host,token,"测试.js","","hello word","")
    // data=updateScript(host,token,"测试.js","","你好")
    // data=deleteScript(host,token,"测试.js","")
    // data=runScript(host,token,"jd_CheckCK.js","KingRan_KR")
    // data=StopScript(host,token,"jd_CheckCK.js","KingRan_KR")

    // let envs=getEnvs(host,token)
    // data=envs[0]	
    // data=addEnvs(host,token,[{"name":"Test","value":"值","remarks":"备注1"}])
    // data=updateEnv(host,token,"9gDpadTPLRM1rBoK","Test2","value2","remark2")
    // data=moveEnvs(host,token,"9gDpadTPLRM1rBoK",65,60)
    // data=getEnv(host,token,"9gDpadTPLRM1rBoK")
    // data=deleteEnvs(host,token,["9gDpadTPLRM1rBoK"])
    // data=disableEnvs(host,token,["NVgvoIAzhPhPwU8n"])
    // data=enableEnvs(host,token,["NVgvoIAzhPhPwU8n"])

    // data=getConfigs(host,token)
    // data=getConfig(host,token,"extra.sh")
    // data=updateConfig(host,token,"extra.sh","Hello")

    // let logs=getLogs(host,token)
    // data=logs[1].files
    // data=getLog(host,token,logs[1].name,logs[1].files[0])

    // data=getCrons(host,token)[30]
    // data=addCron(host,token,"测试任务","task hello.py","1 2 1 1 1")
    // data=updateCron(host,token,"iBKdVkntztpWOJmZ","测试任务","task hello.py2","1 4 1 1 1")

    // data=deleteCrons(host,token,["DBPOktsB6d4S6RUn"])
    // data=enableCrons(host,token,["DBPOktsB6d4S6RUn"])
    // data=pinCrons(host,token,["DBPOktsB6d4S6RUn"])
    // data=unpinCrons(host,token,["DBPOktsB6d4S6RUn"])
    // data=getCronImport(host.token)
    // data=runCrons(host,token,["aZTfc0tRFD2jvPR5"])
    // data=stopCrons(host,token,["aZTfc0tRFD2jvPR5"])
    // data=deleteCrons(host,token,["tAEzGQX9Vtgk262O"])
    // data=getCronLog(host,token,"h08xz5tLf34v6Sgl")

    console.log(data)
    console.log(JSON.stringify(data))
}

//青龙变量name同步
//function syncEnvs(from_host,from_token,to_host,to_token,name,value_keyword){
function syncEnvs(ql1, ql2, name, value_keyword) {
    let from_envs = getEnvs(from_host, from_token)
    let to_envs = getEnvs(to_host, to_token)
    if (!from_envs || !to_envs)
        return false
    if (name) {
        from_envs = from_envs.filter(env => env.name == name)
        to_envs = to_envs.filter(env => env.name == name)
    }
    for (let i = 0; i < from_envs.length; i++) {
        let keyword = ""
        let index = 0
        if (value_keyword) {
            keyword = from_envs[i].value.match(value_keyword)
            if (!keyword)
                return false
            else
                keyword = keyword[0]
            index = to_envs.findIndex(env => {
                let kt = env.match(keyword)
                if (kt && kt[0] == keyword)
                    return true
                else
                    return false
            })
        }
        else
            index = to_envs.findIndex(env => env.name == from_envs[i].name)
        if (index != -1) {
            let id = to_envs[index]._id ? to_envs[index]._id : to_envs[index].id
            to_envs[index].value = from_envs[i].value
            if (!updateEnv(to_host, to_token, id, from_envs[i].name, from_envs[i].value, from_envs[i].remarks))
                console.log(from_envs[i].name + "\n" + from_envs[i].value + "sync update failed")
        }
        else {
            if (!addEnvs(to_host, to_token, from_envs[i].name, [from_envs[i]]))
                console.log(from_envs[i].name + "\n" + from_envs[i].value + "sync add failed")
        }
    }
}


//修改青龙配置文件变量
function updateConfigEnvs(host, token, envs) {
    //s.reply(JSON.stringify(envs))
    let Config = getConfig(host, token, "config.sh")
    if (Config != null) {
        for (let i = 0; i < envs.length; i++) {
            let reg = new RegExp("(?<=export[ ]+" + envs[i].name + "[ ]*=[ ]*(\"|\'))[^\"\']*")
            if (Config.search(reg) == -1)
                Config += "\nexport " + envs[i].name + "=\"" + envs[i].value + "\""
            else
                Config = Config.replace(reg, envs[i].value)
        }
        return updateConfig(host, token, "config.sh", Config)
    }
    return false
}



//获取存储桶minakey-key（默认qinglong-QLS)青龙信息并维护token有效性
function QLS(mainKey, key) {
    let QLS = null
    let flag = false
    let db = new Bucket(mainKey ? mainKey : "qinglong")
    let data = db.get(key ? key : "QLS")
    if (!data)
        return null
    else {
        try {
            QLS = JSON.parse(data)
        }
        catch (e) {
            console.log(data + "\n\n存储桶数据未json")
            return null
        }
    }
    QLS.forEach((ql, i) => {
        if (ql.token) {
            let envs = getEnvs(ql.host, ql.token)	//检测token是否失效
            if (!envs) {
                console.log(ql.name + "token疑似失效,重新获取")
                QLS[i]["token"] = getToken(ql.host, ql.client_id, ql.client_secret)
                flag = true
            }
        }
        else {
            console.log("获取" + ql.name + "token")
            QLS[i]["token"] = getToken(ql.host, ql.client_id, ql.client_secret)
            flag = true
        }
        if (!QLS[i].token) {
            console.log(ql.name + "token获取失败,青龙管理容器配置错误或者青龙已挂掉\n")
        }
    })
    if (flag)
        db.set("QLS", JSON.stringify(QLS))
    return QLS
}

//获取拉库任务,兼容新旧版青龙
function getRepos(host, token, searchValue) {
    let subs = getSubs(host, token, searchValue)
    return subs ? subs : getCrons(host, token, "repo&" + searchValue)
}

//根据拉库命令(ql repo xxx或ql raw xxx)添加拉库任务
function addRepo(host, token, command) {
    let temp = command.split(/\S+/)
    let url = temp[2]
    let path = url.split("/")
    let repo = {
        "name": "傻妞拉库",
        "url": url,
        "alias": path[path.length - 2] ? path[path.length - 2] + "_" + path[path.length - 1].split(".")[0] : path[path.length - 1].split(".")[0],
        "schedule_type": "crontab",    //默认使用cron定时，且设置为2 2 29 2 *
        "schedule": "2 2 29 2 *",
        "autoAddCron": true,    //默认自动添加新任务
        "autoDelCron": true     //默认自动删除失效任务
    }
    if (temp[1] == "repo") {
        repo["type"] = "public-repo"
        repo["whitelist"] = temp[3] ? temp[3] : ""
        repo["blacklist"] = temp[4] ? temp[4] : ""
        repo["dependences"] = temp[5] ? temp[5] : ""
    }
    else if (temp[1] == "raw") {
        repo["type"] = "file"
    }
    else {
        console.log("命令有误，必须为ql  repo xxx 或者 ql raw xxx")
        return false
    }
    return addSub(host, token, repo)
}

//执行拉库任务ids
function runRepos(host, token, ids) {
    return runSubs(host, token, ids) || runCrons(host, token, ids)
}

//停止拉库任务ids
function stopRepos(host, token, ids) {
    return stopSubs(host, token, ids) || stopCrons(host, token, ids)
}

//删除拉库任务ids
function deleteRepos(host, token, ids) {
    return deleteSubs(host, token, ids) || deleteCrons(host, token, ids)
}

//执行拉库命令ql repo xxx或ql raw xxx 
function runRepoComm(host, token, command) {
    let temp = command.split(/\S+/)
    let url = temp[2]
    let repos = getRepos(host, token)
    let repo = repos.find(repo => repo.url == url)

    //已存在该拉库任务
    if (repo)
        return runRepos(host, token, [repo.id ? repo.id : repo._id])

    //未存在该拉库任务，则自动添加并执行
    repo = addRepo(host, token, command) || addCron(host, token, "傻妞拉库", command, "0 0 29 2 *")
    if (repo)
        return runRepos(host, token, [repo.id]) || runCrons(host, token, [repo._id ? repo._id : repo.id])
}


function ReqQL(url, method, body, token) {
    let option = {
        url,
        method,
        headers: {
            "accept": "application/json"
        }
    }
    if (body)
        option.body = body
    if (token) {
        if (token.token)
            token = token.token
        option.headers["Authorization"] = "Bearer " + token
    }

    let resp = request(option)
    if (resp.status == 200) {
        //console.log(resp.body)
        let data = JSON.parse(resp.body)
        if (data.code == 200) { //请求成功
            if (data.data) {
                if (data.data.data)  //新版青龙
                    return data.data.data
                else
                    return data.data    //旧版青龙
            }
            else if (data.dirs)  //旧版青龙任务日志请求
                return data.dirs
            else    //其他请求
                return true
        }
    }
    //异常
    console.log(JSON.stringify(option) + "\n\n" + JSON.stringify(resp))
    return null
}

/****************用户*******************/
//获取青龙token
function getToken(host, client_id, client_secret) {
    let url = host + "/open/auth/token?client_id=" + client_id + "&client_secret=" + client_secret
    return ReqQL(url, "get", null, null)
}

//获取青龙登陆信息,未知错误
function QL_Login(host, name, password) {
    return ReqQL(host + "/open/user/login", "post", { "name": name, "password": password }, null)
}

//****************青龙订阅***************** */
/*{
            "id": 4,
            "name": "订阅备注名",
            "url": "https://XXX",
            "schedule": "2 23 * * *",
            "interval_schedule": null,
            "type": "public-repo",
            "whitelist": "jd_|jx_|jdCookie",
            "blacklist": "activity|backUp|XAY|FLP|MN|AJ|YSLD|qbyq",
            "status": 1,
            "dependences": "^jd[^_]|USER|utils|function|sign|sendNotify|ql|JDJR",
            "extensions": null,
            "sub_before": null,
            "sub_after": null,
            "branch": null,
            "pull_type": null,
            "pull_option": null,
            "pid": 12934,
            "is_disabled": null,
            "log_path": "YYY/2023-01-18-23-02-00.log",
            "schedule_type": "crontab",
            "alias": "ZZZ",
            "proxy": null,
            "createdAt": "2023-01-16T15:52:19.105Z",
            "updatedAt": "2023-01-18T15:02:03.896Z"
}*/
//获取青龙订阅，无searchValue返回所有订阅
function getSubs(host, token, searchValue) {
    let url = host + "/open/subscriptions"
    if (searchValue)
        url += "?searchValue=" + encodeURI(searchValue)
    return ReqQL(url, "get", null, token)
}

/*添加订阅，repo对象：{
    "name": 订阅备注名
    "type": public-repo（仓库，对应ql repo xxx）或file（单文件,对应ql raw xxx）
    "url": 订阅链接,
    "alias":脚本别名或者仓库文件夹名，取url路径最后2项以"_"连接，并删除末尾的".js" ".git"等
    "schedule_type": crontab(cron规则，对应schedule项)或interval(订阅频率)
    "schedule": 定时规则（string，对应schedule_type值为crontab时），例:"2 2 29 2 *",
    "interval_schedule": 订阅频率（obj，对应schedule_type值为crontab时），例{"type": "days","value": 40}
    "whitelist": 仓库脚本白名单，string，支持正则，拉取单文件时无需定义，无白名单时为空"",下同
    "blacklist": 仓库脚本黑名单
    "dependences": 仓库脚本依赖文件
    "autoAddCron": 拉取到新脚本时是否自动添加新的定时任务(bool),
    "autoDelCron": 有脚本删除时是否自动删除对应的定时任务(bool),
}*/
function addSub(host, token, repo) {
    return ReqQL(host, "post", repo, token)
}

//立即执行订阅id,id为数组
function runSubs(host, token, ids) {
    return ReqQL(host + "/open/subscriptions/run", "put", ids, token)
}

//停止执行订阅id,id为数组
function stopSubs(host, token, ids) {
    return ReqQL(host + "/open/subscriptions/stop", "put", ids, token)
}
//删除任务数组
function deleteSubs(host, token, ids) {
    return ReqQL(host + "/open/subscriptions", "delete", ids, token)
}
/****************青龙变量*******************/
/*环境变量对象
[{
    "value": "",	//值
    "_id": "",		//青龙2.11版本开始为id，自测
    "created": ,
    "status": 0,	//状态，是否禁用
    "timestamp": "Wed Jun 22 2022 17:55:12 GMT+0800 (中国标准时间)",
    "position": ,
    "name": "",			//变量名
    "remarks": ""		//变量备注
}]*/

//获取青龙环境变量,无searchValue返回所有环境变量对象
function getEnvs(host, token, searchValue) {
    let url = host + "/open/envs"
    if (searchValue)
        url += "?searchValue=" + encodeURI(searchValue)
    return ReqQL(url, "get", null, token)
}

//根据id获取青龙环境变量详细信息，成功返回环境变量对象
function getEnv(host, token, id) {
    return ReqQL(host + "/open/envs/" + id, "get", null, token)
}

//添加青龙变量envs:[{name:变量名,value:变量值,remarks:变量备注}]数组
//成功返回环境变量对象
function addEnvs(host, token, envs) {
    return ReqQL(host + "/open/envs", "post", envs, token)
}

//修改青龙变量id:变量id,修改为name:变量名,value:变量值,remark:变量备注
//成功返回修改后的环境变量对象
function updateEnv(host, token, id, name, value, remark) {
    let body = { "value": value, "name": name, "remarks": remark ? remark : "" }
    isNaN(Number(id)) ? body["_id"] = id : body["id"] = id
    return ReqQL(host + "/open/envs", "put", body, token)
}

//删除青龙变量id,id为数组,提交成功即成功，	
function deleteEnvs(host, token, ids) {
    return ReqQL(host + "/open/envs", "delete", ids, token)
}

//移动青龙变量_id从位置from至位置to,from与to为数组下标
function moveEnvs(host, token, id, from, to) {
    return ReqQL(host + "/open/envs/" + id + "/move", "put", { "fromIndex": from, "toIndex": to }, token)
}

//禁用青龙变量id,id为数组	
function disableEnvs(host, token, ids) {
    return ReqQL(host + "/open/envs/disable", "put", ids, token)
}

//启用青龙变量id,id为数组	
function enableEnvs(host, token, ids) {
    return ReqQL(host + "/open/envs/enable", "put", ids, token)
}



/****************青龙配置文件*******************/

//获取青龙配置文件列表,成功返回[{title:filename,value:filename}]对象
function getConfigs(host, token) {
    return ReqQL(host + "/open/configs/files", "get", null, token)
}

//获取青龙配置文件内容
function getConfig(host, token, filename) {
    return ReqQL(host + "/open/configs/" + filename, "get", null, token)
}


//修改配置文件
function updateConfig(host, token, filename, content) {
    return ReqQL(host + "/open/configs/save", "post", { "name": filename, "content": content }, token)
}


/****************青龙日志*******************/
//获取青龙日志件列表,成功返回[{ "name": "","isDir": true, "files": []}]对象数组
function getLogs(host, token) {
    return ReqQL(host + "/open/logs", "get", null, token)
}

//获取青龙日志内容,成功返回string内容
function getLog(host, token, name, logfile) {
    let data = ReqQL(host + "/open/logs/" + name + "/" + logfile, "get", null, token)
    if (!data)
        data = ReqQL(host + "/open/logs/" + logfile + "?path=" + name, "get", null, token)	//兼容不同版本青龙
    return data
}


/****************青龙任务*******************/
//获取青龙定时任务，无searchValue返回所有任务
function getCrons(host, token, searchValue) {
    let url = host + "/open/crons"
    if (searchValue)
        url += "?searchValue=" + encodeURI(searchValue)
    return ReqQL(url, "get", null, token)
}


//添加任务
function addCron(host, token, name, command, cron) {
    return ReqQL(host + "/open/crons", "post", {
        "command": command,
        "schedule": cron,
        "name": name
    }, token)
}

//修改任务
function updateCron(host, token, id, name, task, cron) {
    let body = { "command": task, "name": name, "schedule": cron }
    isNaN(Number(id)) ? body["_id"] = id : body["id"] = id
    return ReqQL(host + "/open/crons", "put", body, token)
}

//删除任务数组
function deleteCrons(host, token, ids) {
    return ReqQL(host + "/open/crons", "delete", ids, token)
}

//禁用任务id,id为数组	
function deleteCrons(host, token, ids) {
    return ReqQL(host + "/open/crons/disable", "put", ids, token)
}

//启用任务id,id为数组	
function enableCrons(host, token, ids) {
    return ReqQL(host + "/open/crons/enable", "put", ids, token)
}

//获取任务日志
function getCronLog(host, token, ids) {
    return ReqQL(host + "/open/crons/" + ids + "/log", "get", null, token)
}

//置顶任务id,id为数组	
function pinCrons(host, token, ids) {
    return ReqQL(host + "/open/crons/pin", "put", ids, token)
}

//取消置顶任务id,id为数组	
function unpinCrons(host, token, ids) {
    return ReqQL(host + "/open/crons/unpin", "put", ids, token)
}

//立即执行任务id,id为数组
function runCrons(host, token, ids) {
    return ReqQL(host + "/open/crons/run", "put", ids, token)
}

//停止任务id,id为数组
function stopCrons(host, token, ids) {
    return ReqQL(host + "/open/crons/stop", "put", ids, token)
}

//未知
function getCronImport(host, token) {
    let resp = request({
        url: host + "/open/crons/import",
        method: "get",
        headers: {
            "accept": "application/json",
            "Authorization": token.token_type + " " + token.token
        }
    })
    try {
        return JSON.parse(resp.body).data
    }
    catch (err) {
        return null
    }
}


/****************青龙脚本*******************/
//本部分所有路径均指/ql/scripts/的相对路径

//获取所有脚本,成功返回脚本信息对象
function getScripts(host, token) {
    return ReqQL(host + "/open/scripts/files", "get", null, token)
}

//获取脚本内容,parent为路径
function getScript(host, token, filename, parent) {
    return ReqQL(host + "/open/scripts/" + filename + "?path=" + parent ? parent : "", "get", null, token)
}

//添加脚本,文件名，路径，脚本内容，原始文件名(?)
function addScript(host, token, filename, path, content) {
    let body = {
        "filename": filename,
        "path": path,
        "content": content
    }
    return ReqQL(host + "/open/scripts", "post", body, token)
}

//修改脚本文件
function updateScript(host, token, filename, path, content) {
    let body = {
        "path": path,
        "filename": filename,
        "content": content
    }
    return ReqQL(host + "/open/scripts", "put", body, token)
}

//删除脚本
function deleteScript(host, token, filename, path) {
    let body = {
        "filename": filename,
        "path": path
    }
    return ReqQL(host + "/open/scripts", "delete", body, token)
}

//执行脚本
function runScript(host, token, filename, path) {
    let body = {
        "filename": filename,
        "path": path
    }
    return ReqQL(host + "/open/scripts/run", "put", body, token)
}

//停止执行脚本,未知
function StopScript(host, token, filename, path) {
    let body = {
        "filename": filename,
        "path": path
    }
    return ReqQL(host + "/open/scripts/stop", "put", body, token)
}


/****************系统管理*******************/
//获取青龙版本，未知
function getVersion(host, token) {
    return ReqQL(host + "/open/system", "get", null, token)
}

//获取青龙日志删除频率,未知
function getSeqLogClear(host, token) {
    return ReqQL(host + "/open/system/log/remove", "get", null, token)
}
