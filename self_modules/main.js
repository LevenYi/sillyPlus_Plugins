/**作者
 * @author Cdle
 * @name node测试
 * @version 1.0.5
 * @description 测试插件
 * @rule 测试
 * @admin false
 * @public false
 * @priority 1
 * @disable false
 */



const {
  sender: s,
  Bucket,
  utils: { buildCQTag, image, video },
} = require("sillygirl");

function get(t, e = (() => { })) {
  t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
    this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
      "X-Surge-Skip-Scripting": !1
    })), $httpClient.get(t, (t, s, i) => {
      !t && s && (s.body = i, s.statusCode = s.status),
        e(t, s, i)
    })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
      hints: !1
    })), $task.fetch(t).then(t => {
      const {
        statusCode: s,
        statusCode: i,
        headers: r,
        body: o
      } = t;
      e(null, {
        status: s,
        statusCode: i,
        headers: r,
        body: o
      }, o)
    }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
      try {
        if (t.headers["set-cookie"]) {
          const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
          s && this.ckjar.setCookieSync(s, null),
            e.cookieJar = this.ckjar
        }
      } catch (t) {
        this.logErr(t)
      }
    }).then(t => {
      const {
        statusCode: s,
        statusCode: i,
        headers: r,
        body: o
      } = t;
      e(null, {
        status: s,
        statusCode: i,
        headers: r,
        body: o
      }, o)
    }, t => {
      const {
        message: s,
        response: i
      } = t;
      e(s, i, i && i.body)
    }))
}


(async () => {
  const addr = "http://192.168.31.5:5800/open/envs"
  // let body = {
  //   id: 1,
  //   name: "JD_COOKIE",
  //   value: "pt_key=app_openAAJlP3I4ADBc8u6eVexQbzcla5r5naZx6xSci0-8Nq1IEmJOmHcr1vbumZHlJS2tVWUv9DA72DA;pt_pin=Leven_Yi;",
  //   remarks: " 大号@@1697786598289"
  // }
  const body = { id: 478, value: "value", name: "Test", remarks: "备注改" }
  const options = {
    method: "put",
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer b94c5702-9c4f-4f1f-87a0-d02eb43c4ade"
    },
    body: JSON.stringify(body)
  }
  let resp = await fetch(addr, options)
  console.log(await resp.text())

  const url = 'https://myip.ipip.net/';
  let data = await fetch(url)
    .then((resp) => resp.text())
    .then((data) => console.log(`value is ${data}`))
    .catch((e) => console.log(e));
  // fetch(url,options)
  //   .then((resp => resp.text()))
  //   .then((data) => console.log("响应体" + data))
  //   .catch((e) => console.log("错误" + e));
  //console.log(result)

  // fetch(url)
  //   .then(response => {
  //     // 检查响应是否成功
  //     if (!response.ok) {
  //       throw new Error(`HTTP请求失败: ${response.status} ${response.statusText}`);
  //     }

  //     // 获取响应头部数据
  //     console.log('响应头部数据:');
  //     for (const [key, value] of response.headers.entries()) {
  //       console.log(`${key}: ${value}`);
  //     }

  //     // 读取响应体数据
  //     return response.text(); // 或者使用 response.json() 如果响应是 JSON 格式
  //   })
  //   .then(data => {
  //     console.log('响应体数据:');
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('发生错误:', error);
  //   });
  return;
})()
// main()




