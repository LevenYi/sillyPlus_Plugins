/**
 * @title qinglong
 * @origin 傻妞官方
 * @create_at 2023-07-09 18:36:32
 * @description node版，修改自官方QingLOng模块
 * @author 佚名
 * @version v1.1.2
 * @public false
 * @admin true
 * @icon https://qn.whyour.cn/favicon.svg
 * @http ANY ^/api/qinglong/(.*)
 * @class 青龙
 */



// e739fdb8-bc12-4c6e-b14e-079b2474531d

// {client_id, client_secret, url, token: {value, unix}, remark}


const {
    Bucket
} = require("sillygirl")


class QingLong {
    constructor(client_id) {
        this.qinglong = new Bucket("qinglong")
        this.client_id = client_id
        this.address = ""
        this.client_secret = ""
        this.remark = ""
        this.token = ""
        this.fail = 0
        this.system = "";
    }
    async init() {
        const client = await this.qinglong.get(this.client_id)
        this.address = client.address
        this.client_secret = client.client_secret
        this.remark = client.remark
        this.token = client.token
        this.fail = 0
        if (!client.system) {
            client.system = await this.getSystem()
            await qinglong.set(this.client_id, client)
            this.system = client.system
        }
        this.system = client.system
    }
    async #set_token(token) {
        await this.qinglong.set(this.client_id, Object.assign(await this.qinglong.get(this.client_id), { token }))
        this.token = token
    }
    async getSystem() {
        return await await this.apiGet("system")
    }
    async getToken() {
        let now = (new Date()).getTime()
        if (this?.token?.expiration && this?.token?.value && this?.token?.expiration > now) {
            return this.token.value
        } else {
            let resp = await fetch(`${this.address}/open/auth/token?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            try {
                let body = await resp.json()
                const { code, data, message } = body
                if (message) {
                    throw new Error(message)
                }
                await this.#set_token({ value: data.token, expiration: data.expiration })
                return data.token
            } catch (e) {
                console.log(`${this.client_id}(${this.remark})请求token失败：${e}`)
            }
        }
    }
    async apiGet(api, params = {}) {
        return await this.#api({
            api,
            method: "get",
            params,
        })
    }
    async apiPost(api, data, params = {}) {
        return await this.#api({
            api,
            method: "post",
            data,
            params,
        })
    }
    //--------------crons----------
    async getCrons(params = {}) {
        return await this.#api({
            params,
            api: "crons",
        })?.data ?? []
    } // { "id": 1, "name": "任务名", "command": "指令", "schedule": "1 1 1 1 1", "saved": false, "status": 1, "timestamp": "Sun Jul 09 2023 20:09:58 GMT+0800 (China Standard Time)", "isSystem": 0, "isDisabled": 0, "log_path": "", "isPinned": 0, "labels": ["测试"], "last_running_time": 0, "last_execution_time": 0, "updatedAt": "2023-07-09T12:09:58.284Z", "createdAt": "2023-07-09T12:09:58.284Z" }
    // 
    async createCron(body = { "name": "任务名", "command": "指令", "schedule": "1 1 1 1 1", "labels": ["标签"] }) {
        return await this.#api({
            api: "crons",
            method: "post",
            body,
        })
    }
    async updateCrons(body = { "id": 0, "name": "任务名", "command": "指令", "schedule": "1 1 1 1 1", "labels": ["标签"] }) {
        return await this.#api({
            api: "crons",
            method: "put",
            body,
        })
    }
    async runCrons(ids) {
        return await this.#api({
            api: "crons/run",
            method: "put",
            data: ids ?? [],
        })
    }
    async stopCrons(ids) {
        return await this.#api({
            api: "crons/stop",
            method: "put",
            data: ids ?? [],
        })
    }
    async getCronLog(id) {
        return await this.#api({
            api: `crons/${id}/log`,
        })
    }
    async disableCrons(ids) {
        return await this.#api({
            api: "crons/disable",
            method: "put",
            data: ids ?? [],
        })
    }
    async enableCrons(ids) {
        return await this.#api({
            api: "crons/enable",
            method: "put",
            data: ids ?? [],
        })
    }
    async deleteCrons(ids) {
        return await this.#api({
            api: "crons",
            method: "delete",
            data: ids ?? [],
        })
    }
    //--------------subscriptions----------
    async getSubscriptions(params = {}) {
        return await this.#api({
            params,
            api: "subscriptions",
        })
    } // { "id": 1, "name": "任务名", "command": "指令", "schedule": "1 1 1 1 1", "saved": false, "status": 1, "timestamp": "Sun Jul 09 2023 20:09:58 GMT+0800 (China Standard Time)", "isSystem": 0, "isDisabled": 0, "log_path": "", "isPinned": 0, "labels": ["测试"], "last_running_time": 0, "last_execution_time": 0, "updatedAt": "2023-07-09T12:09:58.284Z", "createdAt": "2023-07-09T12:09:58.284Z" }
    // 
    async createSubscription(body = {
        "name": "faker2",
        "type": "public-repo",
        "url": "https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker2.git",
        "branch": "main",
        "alias": "shufflewzc_faker2_main",
        "schedule_type": "crontab",
        "schedule": "1 1 1 1 1",
        "whitelist": "jd_|jx_|gua_|jddj_|jdCookie",
        "blacklist": "activity|backUp",
        "dependences": "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts",
        "autoAddCron": true,
        "autoDelCron": true
    }) {
        return await this.#api({
            api: "subscriptions",
            method: "post",
            body,
        })
    }
    async updateSubscription(body = {
        "id": 0,
        "name": "faker2",
        "type": "public-repo",
        "url": "https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker2.git",
        "branch": "main",
        "alias": "shufflewzc_faker2_main",
        "schedule_type": "crontab",
        "schedule": "1 1 1 1 1",
        "whitelist": "jd_|jx_|gua_|jddj_|jdCookie",
        "blacklist": "activity|backUp",
        "dependences": "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts",
        "autoAddCron": true,
        "autoDelCron": true
    }) {
        return await this.#api({
            api: "subscriptions",
            method: "put",
            body,
        })
    }
    async disableSubscriptions(ids) {
        return await this.#api({
            api: "subscriptions/disable",
            method: "put",
            data: ids ?? [],
        })
    }
    async enableSubscriptions(ids) {
        return await this.#api({
            api: "subscriptions/enable",
            method: "put",
            data: ids ?? [],
        })
    }
    async runSubscriptions(ids) {
        return await this.#api({
            api: "subscriptions/run",
            method: "put",
            data: ids ?? [],
        })
    }
    async stopSubscriptions(ids) {
        return await this.#api({
            api: "subscriptions/stop",
            method: "put",
            data: ids ?? [],
        })
    }
    async getSubscriptionLog(id) {
        return await this.#api({
            api: `subscriptions/${id}/log`,
        })
    }
    async deleteSubscriptions(ids) {
        return await this.#api({
            api: "subscriptions",
            method: "delete",
            data: ids ?? [],
        })
    }

    // ---------------------env-----------
    // { "id": 1, "value": "test", "timestamp": "Sun Jul 09 2023 20:47:01 GMT+0800 (China Standard Time)","status": 1, "position": 4499990000000000, "name": "JD_COOKIE", "remarks": "测试", "createdAt": "2023-07-09T12:47:01.993Z", "updatedAt": "2023-07-09T12:56:11.883Z"}
    async getEnvs(params = {}) {
        return await this.#api({
            params,
            api: "envs",
        })
    }
    async createEnv(env = { value: "值", name: "变量", remarks: "备注" }) {
        return this.createEnvs([env])[0]
    }
    async updateEnv(env = { id: 0, value: "值", name: "变量", remarks: "备注" }) {
        return await this.#api({
            api: "envs",
            method: "put",
            data: env,
        })
    }
    async createEnvs(envs = [{ value: "值", name: "变量", remarks: "备注" }]) {
        return await this.#api({
            api: "envs",
            method: "post",
            data: envs,
        })
    }
    async moveEnv(data = { id: 0, fromIndex: 0, toIndex: 0 }) {
        const { id, fromIndex, toIndex } = data
        return await this.#api({
            api: `envs/${id}/move`,
            method: "put",
            data: { fromIndex, toIndex },
        })
    }
    async disableEnvs(ids) {
        return await this.#api({
            api: "envs/disable",
            method: "put",
            data: ids ?? [],
        })
    }
    async enableEnvs(ids) {
        return await this.#api({
            api: "envs/enable",
            method: "put",
            data: ids ?? [],
        })
    }
    async deleteEnvs(ids) {
        return await this.#api({
            api: "envs",
            method: "delete",
            data: ids ?? [],
        })
    }
    //-------------dependencies------------
    // 0 nodejs 1 python3 2 linux
    async getDependencies(params) {
        switch (params["type"]) {
            case 0:
            case "0":
                params["type"] = "nodejs"
                break
            case 1:
            case "1":
                params["type"] = "python3"
                break
            case 2:
            case "2":
                params["type"] = "linux"
                break
        }
        return await this.#api({
            params,
            method: "get",
            api: "dependencies",
        })
    }
    async getDependency(id) {
        return await this.#api({
            method: "get",
            api: `dependencies/${id}`,
        })
    }
    async createDependencies(body) {
        return await this.#api({
            api: "dependencies",
            method: "post",
            body,
        })
    }
    async createDependency(item = { name: request, type: 0, remark: "请求库" }) {
        return this.createDependencies([item])[0]
    }
    async deleteDependencies(ids = []) {
        return await this.#api({
            api: "dependencies",
            method: "delete",
            data: ids,
        })
    }
    async deleteDependenciesForce(ids = []) {
        return await this.#api({
            api: "dependencies/force",
            method: "delete",
            data: ids,
        })
    }
    //---------------config----------
    async getConfigs() {
        if (!this.configs) {
            const text = await this.apiGet("configs/config.sh")
            this.configs = this.#parseConfig(text)
        }
        return this.configs
    }
    async getConfig(key) {
        for (let item of this.getConfigs()) {
            if (item.key == key) {
                return item
            }
        }
        return {}
    }
    async setConfigs(kvs) {
        let text = await this.apiGet("configs/config.sh").trim()
        let lines = text.split("\n");
        let modified = false
        let notfounds = []
        for (let { key, value, remark, enable } of kvs) {
            if (value != undefined) {
                if (strings.hasPrefix(value, `"`) || strings.hasSuffix(value, `"`)) {
                    value = `"${strings.trim(value, `"`)}"`
                } else {
                    if (isNaN(+value)) {
                        value = `"${value}"`
                    }
                }
            }
            let found = false
            let nstr = `${key}=${value}`
            const regex = new RegExp(`^[# ]*(export\\s+|)(${key})=([^ ].*)$`);
            for (let i in lines) {
                lines[i] = strings.trim(lines[i], " \n")
                const match = lines[i].match(regex);
                if (match) {
                    found = true
                    if (value != undefined) {
                        let ostr = `${match[2]}=${match[3]}`
                        if (nstr != ostr) {
                            lines[i] = strings.replaceAll(lines[i], ostr, nstr)
                            modified = true
                        }
                    }
                    if (strings.hasPrefix(lines[i], "#")) {
                        if (enable === true) {
                            lines[i] = strings.trim(lines[i], "# ")
                            modified = true
                        }
                    } else {
                        if (enable === false) {

                            lines[i] = "## " + lines[i]
                            modified = true
                        }
                    }
                }
            }
            if (!found) {
                modified = true
                notfounds.push(`${enable === false ? "## " : ""}export ${nstr}`)
            }
        }
        if (!modified) {
            return
        }
        text = lines.join("\n") + "\n" + notfounds.join("\n")
        await this.apiPost(
            "configs/save",
            {
                content: text,
                name: "config.sh",
            },
        )
    }
    async setConfig({ key, value, remark, enable }) {
        this.setConfigs([{ key, value, remark, enable }])
    }
    async #parseConfigLine(line) {
        return this.#parseConfig()
    }
    async #parseConfig(text) {
        const lines = text.split("\n");
        const configList = [];
        let remarks = [];
        for (let line of lines) {
            line = line.trim();
            if (line === "") {
                continue;
            }
            let enable = true;
            let remark = "";
            if (strings.hasPrefix(line, "#")) {
                enable = false
            }
            let key, value;
            const match = line.match(/^[# ]*(export\s+|)([^=\s]+)=([^ ].*)$/);
            if (match) {
                if (remarks.length != 0) {
                    remark = remarks.join("\n")
                    remarks = []
                }
                key = match[2];
                value = match[3];
                configList.push({ key, value, enable, remark });
            } else {
                remarks.push(line)
            }
        }
        return configList;
    }
    //--------script-----
    async writeFile(formData = {
        file: "",
        filename: "test.js",
        path: "",
        content: "",
        directory: "",
    }) {
        return await this.#api({
            api: "scripts",
            method: "post",
            formData,
        })
    }
    async deleteFile({ filename, path } = {
        filename: "test1.js",
        path: "",
    }) {
        return await this.#api({
            api: "scripts",
            method: "delete",
            formData: {
                type: "file",
                filename,
                path: path ?? "",
            },
        })
    }
    //------------
    async #api({ api, method, data, params, body: data2, formData }) {
        //console.debug("青龙请求：", JSON.stringify({ api, method, params, body: data ?? data2 ?? {} }))
        if (params)
            params = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join("&");
        else
            params = ""
        const options = {
            method: method ?? "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${await this.getToken()}`,
            },
            //body: data ?? data2 ?? undefined
            body: data ? JSON.stringify(data) : data2 ? JSON.stringify(data2) : undefined
        }
        if (formData) {
            options.formData = formData
        }
        const url = `${this.address}/open/${api}?${params}`
        console.log("请求:" + url + "\n" + JSON.stringify(options))
        let resp = await fetch(url, options)
        try {
            let body = await resp.json()
            if (body?.message && body?.code != 200) {
                throw `${this.client_id}(${this.remark})请求${api}失败：${body.message}`
            }
            else
                return body?.data?.data ?? body?.data ?? true
        } catch (e) {
            console.log(e)
        }
    }
}




module.exports = QingLong



