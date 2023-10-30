/**
* @title Bard
* @create_at 2023-07-29 14:19:30
* @description 谷歌Bard插件，输入'bard ?'与Bard进行互动，详见插件内说明。
* @author Masato
* @rule ^[Bb]ard ([\s\S]+)$
* @version v1.0.1
 * @public false
* @class AI
* @form {key: "Bard.COOKIE_1PSID", title: "COOKIE_1PSID", tooltip: "获取方法见脚本注释", required: true}
* @form {key: "Bard.COOKIE_1PSIDTS", title: "COOKIE_1PSIDTS", tooltip: "获取方法见脚本注释", required: true}
* @icon data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTA4MCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNTE1LjA5IDcyNS44MjRMNDcyLjAwNiA4MjQuNTAzQzQ1NS40NDQgODYyLjQzNCA0MDIuOTU0IDg2Mi40MzQgMzg2LjM5MyA4MjQuNTAzTDM0My4zMDggNzI1LjgyNEMzMDQuOTY2IDYzOC4wMDYgMjM1Ljk1MyA1NjguMTA0IDE0OS44NjggNTI5Ljg5MkwzMS4yNzc5IDQ3Ny4yNTFDLTYuNDI2MDEgNDYwLjUxNSAtNi40MjU5NCA0MDUuNjY1IDMxLjI3NzkgMzg4LjkyOUwxNDYuMTY0IDMzNy45MzJDMjM0LjQ2MyAyOTguNzM3IDMwNC43MTQgMjI2LjI0NCAzNDIuNDAxIDEzNS40MzFMMzg2LjA0NCAzMC4yNjkzQzQwMi4yMzkgLTguNzU2MzcgNDU2LjE1OSAtOC43NTY0NiA0NzIuMzU1IDMwLjI2OTJMNTE1Ljk5OCAxMzUuNDMyQzU1My42ODUgMjI2LjI0NCA2MjMuOTM1IDI5OC43MzcgNzEyLjIzNCAzMzcuOTMyTDgyNy4xMjEgMzg4LjkyOUM4NjQuODI1IDQwNS42NjUgODY0LjgyNSA0NjAuNTE1IDgyNy4xMjEgNDc3LjI1MUw3MDguNTMgNTI5Ljg5MkM2MjIuNDQ2IDU2OC4xMDQgNTUzLjQzMyA2MzguMDA2IDUxNS4wOSA3MjUuODI0WiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzI1MjVfNzc3KSIvPgo8cGF0aCBkPSJNOTE1LjQ4NSAxMDM2Ljk4TDkwMy4zNjcgMTA2NC43NUM4OTQuNDk5IDEwODUuMDggODY2LjM0OSAxMDg1LjA4IDg1Ny40ODEgMTA2NC43NUw4NDUuMzY0IDEwMzYuOThDODIzLjc2NSA5ODcuNDY1IDc4NC44NjIgOTQ4LjA0MiA3MzYuMzE4IDkyNi40NzVMNjk4Ljk4NyA5MDkuODg5QzY3OC44MDIgOTAwLjkyMSA2NzguODAyIDg3MS41NzggNjk4Ljk4NyA4NjIuNjFMNzM0LjIzMSA4NDYuOTUxQzc4NC4wMjMgODI0LjgyOSA4MjMuNjIzIDc4My45NDcgODQ0Ljg1MSA3MzIuNzVMODU3LjI5NCA3MDIuNzQxQzg2NS45NjYgNjgxLjgyNiA4OTQuODgyIDY4MS44MjYgOTAzLjU1NCA3MDIuNzQxTDkxNS45OTcgNzMyLjc1QzkzNy4yMjUgNzgzLjk0NyA5NzYuODI2IDgyNC44MjkgMTAyNi42MiA4NDYuOTUxTDEwNjEuODYgODYyLjYxQzEwODIuMDUgODcxLjU3OCAxMDgyLjA1IDkwMC45MjEgMTA2MS44NiA5MDkuODg5TDEwMjQuNTMgOTI2LjQ3NUM5NzUuOTg3IDk0OC4wNDIgOTM3LjA4MyA5ODcuNDY1IDkxNS40ODUgMTAzNi45OFoiIGZpbGw9InVybCgjcGFpbnQxX3JhZGlhbF8yNTI1Xzc3NykiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8yNTI1Xzc3NyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg2NzAuNDQ3IDQ3NC4wMDYpIHJvdGF0ZSg3OC44NTgpIHNjYWxlKDY2NS41IDY2NS44MjQpIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFCQTFFMyIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMSIgc3RvcC1jb2xvcj0iIzFCQTFFMyIvPgo8c3RvcCBvZmZzZXQ9IjAuMzAwMjIxIiBzdG9wLWNvbG9yPSIjNTQ4OUQ2Ii8+CjxzdG9wIG9mZnNldD0iMC41NDU1MjQiIHN0b3AtY29sb3I9IiM5QjcyQ0IiLz4KPHN0b3Agb2Zmc2V0PSIwLjgyNTM3MiIgc3RvcC1jb2xvcj0iI0Q5NjU3MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNDlDNDYiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDFfcmFkaWFsXzI1MjVfNzc3IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDY3MC40NDcgNDc0LjAwNikgcm90YXRlKDc4Ljg1OCkgc2NhbGUoNjY1LjUgNjY1LjgyNCkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMUJBMUUzIi8+CjxzdG9wIG9mZnNldD0iMC4wMDAxIiBzdG9wLWNvbG9yPSIjMUJBMUUzIi8+CjxzdG9wIG9mZnNldD0iMC4zMDAyMjEiIHN0b3AtY29sb3I9IiM1NDg5RDYiLz4KPHN0b3Agb2Zmc2V0PSIwLjU0NTUyNCIgc3RvcC1jb2xvcj0iIzlCNzJDQiIvPgo8c3RvcCBvZmZzZXQ9IjAuODI1MzcyIiBzdG9wLWNvbG9yPSIjRDk2NTcwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y0OUM0NiIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=
/* 
输入'bard ?'与Bard进行互动。
每个用户创建单独会话，可以保持上下文进行调教。
输入'bard 清空上下文'将清空会话,重新创建新的会话。

COOKIE获取方法：
打开 https://bard.google.com/ 并登录。
按F12或直接打开开发者模式，点击Application/应用程序，点击左侧Storage/存储下的Cookie，
展开找到https://bard.google.com 项，在右侧列表Name/名称项下获取__Secure-1PSID的value/值和__Secure-1PSIDTS的value/值。

本插件基于bard-ai包实现
*/
import Bard from "bard-ai";
(async () => {
	const { sender: s, Bucket } = await import("sillygirl");
	let query = await s.param(1);
	const BardStorage = new Bucket('Bard');
	const COOKIE_1PSID = await BardStorage.get('COOKIE_1PSID');
	const COOKIE_1PSIDTS = await BardStorage.get('COOKIE_1PSIDTS');
	const BardCookie = {"__Secure-1PSID": COOKIE_1PSID, "__Secure-1PSIDTS": COOKIE_1PSIDTS};
	if (!COOKIE_1PSID || !COOKIE_1PSIDTS) return s.reply("请先设置Bard COOKIE");
	let platform = await s.getPlatform(),
		userId = await s.getUserId();
	if (query === '清空上下文') {
		await BardStorage.set(`${platform}_${userId}`, "");
		return s.reply('清空上下文成功...');
	}
	const getConversation = await BardStorage.get(`${platform}_${userId}`);
	let ConvId = {};
	if (!getConversation) {
		console.log('创建新的会话...');
	} else {
		console.log('读取会话...');
		ConvId = getConversation;
	}
	try {
		let myBard = new Bard(BardCookie);
		let myConversation = myBard.createChat(ConvId);
		s.reply(await myConversation.ask(query));
		await BardStorage.set(`${platform}_${userId}`, myConversation.export());
	} catch (e) {
		console.log(e);
		return s.reply('会话出现错误!');
	}
})();